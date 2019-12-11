import { Origin, Origins } from 'src/app/data/origin';
import { Archetype, Archetypes } from 'src/app/data/archetype';
import { TraversalPower, TraversalPowers } from 'src/app/data/traversal';
import { Stats, StatName } from '../data/stat';
import { Entity } from './entity';
import { Alignment, Alignments } from '../data/alignment';
import { jsonObject, jsonMember, jsonArrayMember } from 'typedjson';
import { jsonDataMember, jsonDataArrayMember } from '../core/decorators/json-data-member';
import { Language, Languages } from '../data/language';
import { group } from '../core/functions';
import { DamageType, DamageTypes } from '../data/damage-type';
import { PowerSet, PowerSets } from '../data/power-set';
import { MainPower, MainPowers } from '../data/main-power';
import { AncillaryPower, AncillaryPowers } from '../data/ancillary-power';
import { Progression, Level } from '../data/leveling';
import { Features } from '../core/enums';
import { Repository } from './repository';

@jsonObject
@Reflect.metadata("name", "Character")
export class Character extends Entity {
  @jsonMember name?: string;

  @jsonMember({ name: "level" })
  private _level: number = 1;
  get level(): number { return this._level; }
  set level(value: number) {
    this._level = Math.min(Math.max(1, value), 30);

    var ancillaryCount = Progression.slice(0, this.level).reduce((count, level) => {
      if (level[Features.Ancillary]) count++;

      return count;
    }, 0);
    this.ancillaryPowers = this.ancillaryPowers.concat(
      new Array<AncillaryPower>(ancillaryCount)
    );
    this.ancillaryPowers.splice(ancillaryCount);
  }
  get proficiency(): number { return 2 + Math.floor((this.level - 1) / 4); }

  @jsonDataMember(Origins)
  private _origin?: Origin;
  get origin() { return this._origin; }
  set origin(value: Origin) {
    this._origin = value;

    this.languages = new Array<Language>(this.origin.languages.length);

    this.originSkills = this.originSkills.filter(s => this.origin.proficiencyOptions.indexOf(s) > -1);
  }

  @jsonArrayMember(String) originSkills: string[] = [];
  public changeOriginSkill(from: string, to: string): void {
    let index = this.originSkills.indexOf(from);

    if (index > -1) {
      this.originSkills[index] = to;
    }
    else if (to && to.length) {
      this.originSkills.push(to);
    }

    Repository.save(Character, this);
  }
  public getOriginSkills(): string[] {
    const array = this.originSkills.concat(new Array<string>(this.origin.proficiencyCount));

    array.splice(this.origin.proficiencyCount);

    return array;
  }

  public originLanguageDisplay(): string {
    var display = "English";

    var categories = group(this.origin.languages);
    for (const category in categories) {
      const count = categories[category];

      display += `, ${count} ${category} Language${count > 1 ? "s" : ""} of your choice`;
    }

    return display + ".";
  }
  @jsonDataArrayMember(Languages)
  languages: Language[] = [];

  @jsonDataMember(Alignments)
  alignment?: Alignment;

  @jsonDataMember(Archetypes)
  private _archetype?: Archetype;
  get archetype() { return this._archetype; }
  set archetype(value: Archetype) {
    if (this.archetype && value) {
      if (this.archetype.primaryPower !== value.primaryPower) {
        this.primaryPowerSet = undefined;
      }
      if (this.archetype.secondaryPower !== value.secondaryPower) {
        this.secondaryPowerSet = undefined;
      }
    }

    this._archetype = value;

    this.health = this.maxHealth;
  }
  public archetypeStatDisplay(): string {
    const array: string[] = [];

    for (const stat in this.archetype.statIncreases) {
      const s = stat !== "All Stats";

      array.push(`${stat} increase${s ? 's' : ''} by ${this.archetype.statIncreases[stat]}`)
    }

    return array.join(", ");
  }

  @jsonDataArrayMember(AncillaryPowers)
  ancillaryPowers: AncillaryPower[] = [];
  @jsonMember
  ancillaryStats: { [index: number]: { [increase: number]: StatName } } = {};
  public setIncrease(index: number, increase: number, stat: StatName) {
    if (!this.ancillaryStats[index]) {
      this.ancillaryStats[index] = {};
    }

    this.ancillaryStats[index][increase] = stat;
  }
  @jsonMember({ name: "ancillarySkills" })
  _ancillarySkills: { [index: number]: string };
  get ancillarySkills() {
    if (!this._ancillarySkills) {
      this._ancillarySkills = {};
    }

    return this._ancillarySkills;
  }


  @jsonDataMember(PowerSets)
  primaryPowerSet?: PowerSet;

  @jsonDataMember(PowerSets)
  secondaryPowerSet?: PowerSet;

  public mainPowers(): MainPower[] {
    if (!(this.primaryPowerSet && this.secondaryPowerSet)) return [];

    var primarySet = MainPowers.byCategory[this.primaryPowerSet.name];
    var secondarySet = MainPowers.byCategory[this.secondaryPowerSet.name];

    return Progression.slice(0, this.level).reduce((array, level) => {
      array.push(
        ...[].concat(level[Features.PrimaryPower] || []).map((i: number) => primarySet[i - 1]),
        ...[].concat(level[Features.SecondaryPower] || []).map((i: number) => secondarySet[i - 1]),
      );

      return array;
    }, new Array<MainPower>())
  }

  @jsonDataMember(TraversalPowers)
  traversal?: TraversalPower;

  @jsonDataMember(DamageTypes)
  weakness?: DamageType;
  @jsonDataMember(DamageTypes)
  presence?: DamageType;

  @jsonMember stats: { [stat in StatName]: number } = {
    "Might": 14, "Swiftness": 14, "Vitality": 14,
    "Intelligence": 14, "Ego": 14, "Charisma": 14,
  };
  getStat(stat: StatName): number {
    return this.stats[stat] + this.getStatIncrease(stat);
  }
  getStatIncrease(stat: StatName): number {
    if (!this.archetype) return 0;

    var statIncrease = 0;
    for (let i = 0; i < this.ancillaryPowers.length; i++) {
      const ancillary = this.ancillaryPowers[i];

      if (!ancillary) continue;

      if (ancillary.statIncrease && ancillary.statIncrease["Choose"]) {
        ancillary.statIncrease["Choose"].forEach(increase => {
          if ((this.ancillaryStats[i] || {})[increase] === stat) {
            statIncrease += increase;
          }
        });
      } else {
        statIncrease += (ancillary.statIncrease || {})[stat] || 0;
      }
    }

    return statIncrease
      + (this.archetype.statIncreases[stat] || 0)
      + (this.archetype.statIncreases["All Stats"] || 0);
  }
  getMod(stat: StatName, skill?: string): number {
    let mod = Math.round((this.getStat(stat) - 11) / 2);

    if (skill && this.skills.indexOf(skill) > -1) {
      mod += this.proficiency;
    }

    return mod;
  }
  get skills(): string[] {
    var skills = [];

    for (let skill of this.originSkills) {
      skills.push(skill);
    }

    for (let i = 0; i < this.ancillaryPowers.length; i++) {
      const power = this.ancillaryPowers[i];

      if (power && power.skillProficiency && this.ancillarySkills[i]) {
        skills = skills.concat(this.ancillarySkills[i]);
      }
    }

    return skills;
  }

  @jsonMember health: number;
  get maxHealth(): number {
    if (!this.archetype) return undefined;

    return this.level * (Number.parseInt(this.archetype.recoveryDice.slice(2)) + this.getMod("Vitality"));
  }
  @jsonMember tempHealth: number = 0;

  @jsonMember stamina: number;
  get maxStamina(): number {
    return Math.max(3, this.level + this.getMod("Swiftness"));
  }

  get defense(): number { return 10 + this.getMod("Vitality"); }

  get fortitude(): number { return 8 + this.getMod("Ego"); }

  @jsonMember miscellaneous: {
    [key: string]: { base: string | number, mod: number, type: StatName, proficient?: boolean }
  } = {};

  @jsonMember realName?: string;
  @jsonMember hometown?: string;
  @jsonMember dayJob?: string;

  @jsonMember nationality?: string;
  @jsonMember skinColor?: string;
  @jsonMember hairColor?: string;

  @jsonMember eyeColor?: string;
  @jsonMember height?: string;
  @jsonMember weight?: string;

  @jsonMember tattoos?: string;
  @jsonMember beauty?: number;
  @jsonMember age?: number;

  @jsonMember casualAttire?: string;
  @jsonMember costumeAttire?: string;
  @jsonMember inventory?: string;
  @jsonMember personality?: string;
  @jsonMember flaws?: string;
  @jsonMember allies?: string;
  @jsonMember enemies?: string;
}
