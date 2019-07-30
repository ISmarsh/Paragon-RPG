import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filter" })
export class FilterPipe<T, K extends keyof T> implements PipeTransform {
  transform(value: T[], args: T[] | K | { key: K, value?: T[K] }) {
    if (Array.isArray(args)) {
      return value.filter(x => args.indexOf(x) === -1)
    }

    if (typeof args === "object") {
      return value.filter(x => x[args.key] === args.value);
    }

    return value.filter(x => x[args]);
  }
}
