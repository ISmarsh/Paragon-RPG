import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stats } from 'src/app/data/stat';
import { Skills } from 'src/app/data/skill';
import { SkillMap } from 'src/app/data/stat-skill-map';
import { EditComponent } from '../edit.component';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent extends EditComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    super.ngOnInit();
  }

  stats = Stats;
  skills = Skills;
  skillMap = SkillMap;

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
