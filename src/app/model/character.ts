import { Origin, Origins } from 'src/app/data/origin';
import { Archetype, Archetypes } from 'src/app/data/archetype';
import { TraversalPower, TraversalPowers } from 'src/app/data/traversal';
import { Stats } from '../data/stat';
import { Entity } from './entity';
import { Alignment, Alignments } from '../data/alignment';
import { jsonObject, jsonMember } from 'typedjson';
import { jsonDataMember, jsonDataArrayMember } from '../core/decorators/json-data-member';
import { Language, Languages } from '../data/language';
import { group } from '../core/functions';
import { DamageType, DamageTypes } from '../data/damage-type';
import { PowerSet, PowerSets } from '../data/power-set';
import { MainPower, MainPowers } from '../data/main-power';
import { AncillaryPower, AncillaryPowers } from '../data/ancillary-power';
import { Progression, Level } from '../data/leveling';
import { Features } from '../core/enums';
import { TitleCasePipe } from '@angular/common';

@jsonObject
@Reflect.metadata("name", "Character")
export class Character extends Entity {
  constructor() {
    super();

    Stats.forEach(s => this.stats[s.name] = 10);
  }

  @jsonMember name?: string;
  @jsonMember({ name: "level" })
  private _level: number = 1;
  get level(): number { return this._level; }
  set level(value: number) {
    this._level = Math.min(Math.max(1, value), 20);
    
    var ancillaryCount = (this.levelFeatures[Features.Ancillary] || []).length;
    this.ancillaryPowers = this.ancillaryPowers.splice(ancillaryCount);
  }
  get proficiency(): number { return 2 + Math.floor((this.level - 1) / 4); }  
  get levelFeatures(): Level {
    return Progression.slice(0, this.level - 1).reduce((a, b) => {
      for (let key in b) {
        a[key] = (a[key] || []).concat(b[key]);
      }

      return a;
    }, (<Level>{}));
  }

  @jsonDataMember(Origins)
  private _origin?: Origin;
  get origin() { return this._origin; }
  set origin(value: Origin) {
    this._origin = value;

    this.languages = new Array<Language>(this.origin.languages.length);

    for (const skill in this.skills) {
      if (this.origin.proficiencyOptions.indexOf(skill) === -1) {
        this.skills[skill] = false;
      }
    }
  }
  public originSkills(): string[] {
    const array = new Array<string>(this.origin.proficiencyCount);

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < this.origin.proficiencyOptions.length; j++) {
        const skill = this.origin.proficiencyOptions[j];

        if (this.skills[skill] && array.indexOf(skill) === -1) {
          array[i] = skill;

          break;
        }
      }
    }

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

  @jsonDataMember(PowerSets)
  primaryPowerSet?: PowerSet;
  public primaryPowers(): MainPower[] {
    if (!this.primaryPowerSet) return [];

    var primarySet = MainPowers.byCategory[this.primaryPowerSet.name];

    return this.levelFeatures[Features.PrimaryPower].map((i: number) => primarySet[i - 1]);
  }  
  
  @jsonDataMember(PowerSets)
  secondaryPowerSet?: PowerSet;
  public secondaryPowers(): MainPower[] {
    if (!this.secondaryPowerSet) return [];

    var secondarySet = MainPowers.byCategory[this.secondaryPowerSet.name];

    return this.levelFeatures[Features.SecondaryPower].map((i: number) => secondarySet[i - 1]);
  }

  rangeDisplay(power: MainPower): string {
    var display = power.range.toString();

    if (typeof power.range === "number") display += "ft";

    if (power.area) {
      display += ` (${power.area.size}ft ${new TitleCasePipe().transform(power.area.type)})`;
    }

    return display;
  }

  damageDisplay(power: MainPower): string {
    var scale = (power.damage.scale.concat([])).reverse().find(s => s.level <= this.level)

    return `${scale.die[0]}d${scale.die[1]} ${power.damage.type}`;
  }

  @jsonDataArrayMember(AncillaryPowers)
  ancillaryPowers: AncillaryPower[] = [];

  @jsonDataMember(TraversalPowers)
  traversal?: TraversalPower;

  @jsonDataMember(DamageTypes)
  weakness?: DamageType;
  @jsonDataMember(DamageTypes)
  presence?: DamageType;

  @jsonMember stats: { [stat: string]: number } = {};
  getStat(stat: string): number {
    return this.stats[stat] + this.getStatIncrease(stat);
  }
  getStatIncrease(stat: string): number {
    if (!this.archetype) return 0;

    return (this.archetype.statIncreases[stat] || 0)
      + (this.archetype.statIncreases["All Stats"] || 0);
  }

  @jsonMember skills: { [skill: string]: boolean } = {};
  changeSkill(from: string, to: string): void {
    this.skills[from] = false;
    this.skills[to] = true;
  }
  getMod(stat: string, skill?: string): number {
    let mod = Math.round((this.getStat(stat) - 11) / 2);

    if (skill && this.skills[skill]) { mod += this.proficiency; }

    return mod;
  }
  canBeProficient(skill: string): boolean {
    if (this.skills[skill]) return true;

    return this.origin &&
      this.origin.proficiencyOptions.indexOf(skill) > -1 &&
      this.origin.proficiencyOptions.filter(s => this.skills[s]).length < this.origin.proficiencyCount;
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

  @jsonMember realName?: string;
  @jsonMember hometown?: string;
  @jsonMember dayJob?: string;
}
