import { Component, OnInit, OnDestroy } from '@angular/core';

import { Origins } from 'src/app/data/origin';
import { Languages } from 'src/app/data/language';
import { Alignments } from 'src/app/data/alignment';
import { Archetypes } from 'src/app/data/archetype';
import { PowerSets } from 'src/app/data/power-set';
import { TraversalPowers } from 'src/app/data/traversal';
import { DamageTypes } from 'src/app/data/damage-type';
import { Skills } from 'src/app/data/skill';
import { EditComponent } from '../edit.component';
import { AncillaryPowers } from 'src/app/data/ancillary-power';
import { Stats } from 'src/app/data/stat';
import { SkillMap } from 'src/app/data/stat-skill-map';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent extends EditComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    super.ngOnInit();
  }

  origins = Origins;
  languages = Languages;
  alignments = Alignments;
  archetypes = Archetypes;
  powerSets = PowerSets;
  traversalPowers = TraversalPowers;
  damageTypes = DamageTypes;
  skills = Skills;
  ancillaryPowers = AncillaryPowers;
  stats = Stats;
  skillMap = SkillMap;

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
