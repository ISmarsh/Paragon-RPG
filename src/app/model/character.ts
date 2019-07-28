import { Origin, Origins } from 'src/app/data/origin';
import { Archetype, Archetypes } from 'src/app/data/archetype';
import { TraversalPower, TraversalPowers } from 'src/app/data/traversal';
import { Stats } from '../data/stat';
import { Entity } from './entity';
import { Alignment, Alignments } from '../data/alignment';
import { jsonObject, jsonMember } from 'typedjson';
import { jsonDataMember, jsonDataArrayMember } from '../utility/json-data-member';
import { Language, Languages } from '../data/language';
import { group } from '../utility/functions';

@jsonObject
@Reflect.metadata("name", "Character")
export class Character extends Entity {
  constructor() {
    super();

    Stats.forEach(s => this.stats[s.name] = 10);
  }

  @jsonMember name?: string;
  @jsonMember level: number = 1;
  get proficiency(): number { return 2 + Math.floor((this.level - 1) / 4); }

  @jsonMember health: number;
  get maxHealth(): number {
    if (!this.archetype) return undefined;

    return Number.parseInt(this.archetype.recoveryDice.slice(2)) + this.getMod("Vitality");
  }
  @jsonMember tempHealth: number = 0;

  @jsonMember stamina: number;
  get maxStamina(): number {
    return Math.min(3, this.level + this.getMod("Swiftness"));
  }

  get defense(): number { return 10 + this.getMod("Vitality"); }

  get fortitude(): number { return 8 + this.getMod("Ego"); }


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

  @jsonMember realName?: string;
  @jsonMember hometown?: string;
  @jsonMember dayJob?: string;

  @jsonDataMember(Alignments)
  alignment?: Alignment;

  @jsonDataMember(Archetypes)
  private _archetype?: Archetype;
  get archetype() { return this._archetype; }
  set archetype(value: Archetype) {
    if (this.archetype && value) {
      if (this.archetype.primaryPower !== value.primaryPower) {
        this.primaryPower = undefined;
      }
      if (this.archetype.secondaryPower !== value.secondaryPower) {
        this.secondaryPower = undefined;
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
  @jsonMember primaryPower?: string;
  @jsonMember secondaryPower?: string;

  @jsonDataMember(TraversalPowers)
  traversal?: TraversalPower;

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
}
