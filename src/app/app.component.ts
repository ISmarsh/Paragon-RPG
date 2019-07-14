import { Component } from '@angular/core';

import { Hero } from './model/hero';
import { Origins } from 'src/app/data/origin';
import { Alignments } from 'src/app/data/alignment';
import { Archetypes } from 'src/app/data/archetype';
import { TraversalPowers } from 'src/app/data/traversal';
import { Stats } from 'src/app/data/stat';
import { Skills } from 'src/app/data/skill';
import { SkillMap } from 'src/app/data/stat-skill-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paragon-rpg';
  
  hero = new Hero();

  origins = Origins;
  alignments = Alignments;
  archetypes = Archetypes;
  traversalPowers = TraversalPowers;

  stats = Stats;
  skills = Skills;
  skillMap = SkillMap;
}
