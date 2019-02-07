/*
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
*/
'use strict';
export {};

let space: any = ' ';
let percent: any = '%';
for (let i: number = 0; i < 4; i++) {
  console.log(space.concat(percent).repeat(4));
  console.log(percent.concat(space).repeat(4));
}






/*
let i: number = 1;
if (i / 2 != 0) {
  for(let j: number = 0; j < 4; j ++) {
    i++;
    let combined = space + percent;
    console.log(combined);
  }
} else {
  i++;
  let combined2 = percent + space;
  console.log(combined2);
}
*/
/* for (let i: number = 0; i < 4; i++) {
  let combined: string = space + percent;
  combined.join();
  console.log(combined);
  
}
 */

