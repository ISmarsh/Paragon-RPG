
export const compose = <A, R>(fn1: (a: A) => R, ...fns: Array<(a: A) => A>): (a: A) => R => {
  return fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);
}

export const groupBy = <T>(array: T[], key: keyof T): {[key: string]: T[]} => {
  return array.reduce((r, t) => {
    var rKey = t[key].toString();
    
    (r[rKey] = r[rKey] || []).push(t)
    
    return r;
  }, {})
}

export const group = (array: (string|number)[]): {[key: string]: number} => {
  return array.reduce((r, t) => {
    r[t.toString()] = (r[t.toString()] || 0) + 1;
    
    return r;
  }, {})
}
