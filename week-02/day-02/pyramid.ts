
// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

'use strict';
export {};

let lineCount: number = 4;
let a: any = '*';
let c: any = ' ';
for (let b: any = 0; b < lineCount - 1; b++) {
  console.log(c, c, c, a, c, c, c);
  a = a + a;
  c = c - c - c;  
  console.log('--------');
    }
console.log(a);


