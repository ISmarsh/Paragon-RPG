import { Origin } from 'src/data/origin';
import { Data } from 'src/data/data';
import { Archetype } from 'src/data/archetype';
import { TraversalPower } from 'src/data/traversal';

export class Hero {
  heroName?: string;
  origin?: Origin;
  level = 1;

  realName?: string;
  hometown?: string;
  dayJob?: string;

  alignment?: Data;
  archetype?: Archetype;
  traversal?: TraversalPower;

  proficiencies: string[];
}