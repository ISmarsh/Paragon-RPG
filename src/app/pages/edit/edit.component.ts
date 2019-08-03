import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Character } from '../../model/character';
import { Origins } from '../../data/origin';
import { Languages } from '../../data/language';
import { Alignments } from '../../data/alignment';
import { Archetypes } from '../../data/archetype';
import { PowerSets } from '../../data/power-set';
import { TraversalPowers } from '../../data/traversal';
import { Stats } from '../../data/stat';
import { Skills } from '../../data/skill';
import { SkillMap } from '../../data/stat-skill-map';
import { Repository } from '../../model/repository';
import { DamageTypes } from '../../data/damage-type';
import { Progression } from '../../data/leveling';
import { CharacterService } from 'src/app/core/services/character.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private service: CharacterService
  ) { 
    this.subscriptions.push(this.service.current.subscribe(c => this.character = c));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.characterForm.form.valueChanges.subscribe({
      next: () => {
        //After the change has been applied, save.
        setTimeout(() => Repository.save(Character, this.character))
      }
    });
  }

  subscriptions: Subscription[] = [];

  character!: Character;
  @ViewChild(NgForm, { static: false })
  characterForm: NgForm;

  progression = Progression;

  public up(): void {
    var scrollTargets = document.querySelectorAll("[data-scroll-target]");

    for (let i = scrollTargets.length - 1; i >= 0; i--) {
      const target = scrollTargets[i];
      var rect = target.getBoundingClientRect();

      if (rect.top < -1) {
        
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  public down(): void {
    var scrollTargets = document.querySelectorAll("[data-scroll-target]");

    for (let i = 0; i < scrollTargets.length; i++) {
      const target = scrollTargets[i];
      var rect = target.getBoundingClientRect()

      if (rect.top > 1) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        return;
      }
    }

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
