
export const compose = <A, R>(fn1: (a: A) => R, ...fns: Array<(a: A) => A>): (a: A) => R => {
  return fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);
}
