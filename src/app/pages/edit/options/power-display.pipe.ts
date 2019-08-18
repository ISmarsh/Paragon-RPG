import { Pipe, PipeTransform } from '@angular/core';
import { MainPower } from 'src/app/data/main-power';

@Pipe({
  name: 'powerDisplayRows'
})
export class PowerDisplayPipe implements PipeTransform {
  transform(powers: MainPower[]) {
    const rows: MainPower[][] = [];

    for (let i = 0; i < powers.length; i++) {
      const power = powers[i];

      if (power.minion) {
        rows.push([power]);
      }
      else {
        let row = rows.find(r => r.length === 1 && !r[0].minion);

        if (!row) rows.push(row = []);

        row.push(power);
      }
    }

    return rows;
  }
}
