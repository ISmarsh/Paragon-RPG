import { Origin } from 'src/app/data/origin';
import { Data } from 'src/app/data/data';
import { Archetype } from 'src/app/data/archetype';
import { TraversalPower } from 'src/app/data/traversal';
import { Stats } from '../data/stat';

export class Hero {
  heroName?: string;
  origin?: Origin;
  level = 1;
  proficiency() { get: { return 2 + Math.round(this.level / 4); } }

  realName?: string;
  hometown?: string;
  dayJob?: string;

  alignment?: Data;
  archetype?: Archetype;
  traversal?: TraversalPower;

  stats: { [stat: string]: number } = {};
  skills: { [skill: string]: boolean } = {};
  getMod(stat: string, skill?: string): number {
    let mod = Math.round((this.stats[stat] - 11) / 2);

    if (skill && this.skills[skill]) { mod += this.proficiency(); }

    return mod;
  }

  constructor() {
    Stats.forEach(s => this.stats[s.name] = 10);
  }
}
