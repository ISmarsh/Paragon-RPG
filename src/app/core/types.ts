
export type Data<T = string> = { name: T; };
export type Path = (string | number)[];
export type Ctor<T> = new (...args: any[]) => T;
export type Die = [number, 4 | 6 | 8 | 10 | 12 | 20 | 100];
