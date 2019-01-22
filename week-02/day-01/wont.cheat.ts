'use strict';
export {};

let a: string = '"I won\'t cheat on the exam!"';
let b: string = a;
for (let c = 0; c < 99; c++) {
  a = a + b;
};
console.log(a);

