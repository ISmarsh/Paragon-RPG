import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Character } from './model/character';
import { Origins } from './data/origin';
import { Languages } from './data/language';
import { Alignments } from './data/alignment';
import { Archetypes } from './data/archetype';
import { PowerSets } from './data/power-set';
import { TraversalPowers } from './data/traversal';
import { Stats } from './data/stat';
import { Skills } from './data/skill';
import { SkillMap } from './data/stat-skill-map';
import { Repository } from './model/repository';
import { DamageTypes } from './data/damage-type';
import { Progression } from './data/leveling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.character = Repository.get(Character)[0] || new Character();
  }

  ngAfterViewInit(): void {    
    this.characterForm.form.valueChanges.subscribe({
      next: () => {
        //After the change has been applied, save.
        setTimeout(() => Repository.save(Character, this.character))
      }
    });
  }

  character = new Character();
  @ViewChild(NgForm, { static: false }) 
  characterForm: NgForm;

  origins = Origins;
  languages = Languages;
  alignments = Alignments;
  archetypes = Archetypes;
  powerSets = PowerSets;
  traversalPowers = TraversalPowers;
  damageTypes = DamageTypes;

  stats = Stats;
  skills = Skills;
  skillMap = SkillMap;

  progression = Progression;
}
