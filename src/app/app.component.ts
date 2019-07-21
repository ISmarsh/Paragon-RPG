import { Component, OnInit } from '@angular/core';

import { Character } from './model/character';
import { Origins } from './data/origin';
import { Languages } from './data/language';
import { Alignments } from './data/alignment';
import { Archetypes } from './data/archetype';
import { Powers } from './data/power';
import { TraversalPowers } from './data/traversal';
import { Stats } from './data/stat';
import { Skills } from './data/skill';
import { SkillMap } from './data/stat-skill-map';
import { Repository } from './model/repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.character = Repository.get(Character)[0] || new Character();
  }
  
  character = new Character();

  origins = Origins;
  languages = Languages;
  alignments = Alignments;
  archetypes = Archetypes;
  powers = Powers;
  traversalPowers = TraversalPowers;

  stats = Stats;
  skills = Skills;
  skillMap = SkillMap;

  save() {
    Repository.save(Character, this.character)
  }
}
