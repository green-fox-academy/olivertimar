'use strict';
export {};

let lineCount: number = 4;
let a: string = '*';
let b: string = a;
for (let c: number = 0; c < lineCount - 1; c++) {
    console.log(a);
    a = b + a;       
}
console.log(a);

