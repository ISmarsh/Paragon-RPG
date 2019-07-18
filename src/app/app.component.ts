import { Component } from '@angular/core';

import { Hero } from './model/hero';
import { Origins } from './data/origin';
import { Languages } from './data/language';
import { Alignments } from './data/alignment';
import { Archetypes } from './data/archetype';
import { Powers } from './data/power';
import { TraversalPowers } from './data/traversal';
import { Stats } from './data/stat';
import { Skills } from './data/skill';
import { SkillMap } from './data/stat-skill-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paragon-rpg';
  
  hero = new Hero();

  origins = Origins;
  languages = Languages;
  alignments = Alignments;
  archetypes = Archetypes;
  powers = Powers;
  traversalPowers = TraversalPowers;

  stats = Stats;
  skills = Skills;
  skillMap = SkillMap;
}
