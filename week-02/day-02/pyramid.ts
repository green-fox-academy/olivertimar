'use strict';
export {};

let lineCount: number = 4;
let a: any = '*';
let b: any = a;
let c: string = '';
let e: string = c;
for (let d: number = 0; d < lineCount - 1; d++) {
    console.log(c, a);
    c = c + e;
    a = b + a;       
}
console.log(a);

