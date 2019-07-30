import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'signed' })
export class SignedPipe implements PipeTransform {

  transform(value: number): string {
    const sign = value < 0 ? '' : '+';

    return sign + value;
  }
}
