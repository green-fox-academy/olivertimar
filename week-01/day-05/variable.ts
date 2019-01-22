'use strict';
export {};
let a: number = 3;
a = a + 10;
console.log(a);

let b: number = 100;
b = b - 7;
console.log(b);

let c: number = 44;
c = Math.pow(c, 2);
console.log(c);

let d: number = 125;
d = d / 5;
console.log(d);

let e: number = 8;
e = Math.pow(e, 3);
console.log(e);

let f1: number = 123;
let f2: number = 345;
let f3: boolean = f1 > f2;

console.log(f3);

let g1: number = 350;
let g2: number = 200;
let g3: boolean = g2 * 2 > g1;

console.log(g3);

let h: number = 1357988018575474;
let h1: boolean = h % 11 == 0;
console.log(h1);

let i1: number = 10;
let i2: number = 3;
let i3: boolean = Math.pow(i2, 3) > i1 && i1 > Math.pow(i2, 2);
console.log(i3);

let j: number = 1521;
let j1: boolean = j % 3 == 0;
let j2: boolean = j % 5 == 0;
console.log(j1);
console.log(j2);

let k: string = 'Apple ';
let l: string = k;
for (let m = 0; m < 3; m++) {
  k = k + l;
};
console.log(k);
