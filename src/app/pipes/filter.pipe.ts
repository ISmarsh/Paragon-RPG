import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "filter"})
export class FilterPipe<T> implements PipeTransform {
  transform(value: T[], args: T[]) {
    return value.filter(x => args.indexOf(x) === -1);
  }  
}
