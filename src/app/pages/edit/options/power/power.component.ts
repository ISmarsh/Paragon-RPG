import { Component, OnInit, Input } from '@angular/core';
import { MainPower } from 'src/app/data/main-power';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.scss']
})
export class PowerComponent implements OnInit {
  @Input() power!: MainPower;
  @Input() level!: number;

  constructor() { }

  ngOnInit() {
  }

  rangeDisplay(): string {
    var display = this.power.range.toString();

    if (typeof this.power.range === "number") display += "ft";

    if (this.power.area) {
      display += ` (${this.power.area.size}ft ${new TitleCasePipe().transform(this.power.area.type)})`;
    }

    return display;
  }

  effectRollDisplay(): string {
    var scale = (this.power.effectRoll.scale.concat([])).reverse().find(s => s.level <= this.level)

    var display = `${scale.die[0]}d${scale.die[1]}`;

    if (this.power.effectRoll.type) {
      display += ` ${this.power.effectRoll.type}`;
    }

    return display;
  }
}
