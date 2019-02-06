'use strict';
export {};
let numList: number[] = [1, 2, 3, 4, 5];

function incrementThird(numberarray) {
  numberarray[3] = numberarray[3] + 1;
}
incrementThird(numList);
console.log(numList);