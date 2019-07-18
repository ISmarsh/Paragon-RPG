import { Origin } from 'src/app/data/origin';
import { Data } from 'src/app/data/data';
import { Archetype } from 'src/app/data/archetype';
import { TraversalPower } from 'src/app/data/traversal';
import { Stats } from '../data/stat';
import { Language } from '../data/language';

export class Hero {
  heroName?: string;
  level = 1;
  proficiency() { get: { return 2 + Math.floor((this.level - 1) / 4); } }

  health: number;
  get maxHealth(): number {
    if (!this.archetype) return undefined;

    return Number.parseInt(this.archetype.recoveryDice.slice(2)) + this.getMod("Vitality");
  }
  tempHealth: number = 0;

  stamina: number;
  get maxStamina(): number {
    return Math.min(3, this.level + this.getMod("Swiftness"));
  }
  
  get defense(): number { return 10 + this.getMod("Vitality"); }

  get fortitude(): number { return 8 + this.getMod("Ego"); }

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
  languages: Language[];

  realName?: string;
  hometown?: string;
  dayJob?: string;

  alignment?: Data;

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
  primaryPower?: string;
  secondaryPower?: string;

  traversal?: TraversalPower;

  stats: { [stat: string]: number } = {};
  getStat(stat: string): number {
    return this.stats[stat] + this.getStatIncrease(stat);
  }
  getStatIncrease(stat: string): number {
    if (!this.archetype) return 0;

    return (this.archetype.statIncreases[stat] || 0)
      + (this.archetype.statIncreases["All Stats"] || 0);
  }

  skills: { [skill: string]: boolean } = {};
  getMod(stat: string, skill?: string): number {
    let mod = Math.round((this.getStat(stat) - 11) / 2);

    if (skill && this.skills[skill]) { mod += this.proficiency(); }

    return mod;
  }
  canBeProficient(skill: string): boolean {
    if (this.skills[skill]) return true;

    return this.origin &&
      this.origin.proficiencyOptions.indexOf(skill) > -1 &&
      this.origin.proficiencyOptions.filter(s => this.skills[s]).length < this.origin.proficiencyCount;
  }

  constructor() {
    Stats.forEach(s => this.stats[s.name] = 10);
  }
}
