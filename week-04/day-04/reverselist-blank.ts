// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';
export {};

let numList: number[] = [3, 4, 5, 6, 7];

console.log(numList.reverse);

function reverseArray (numList: number[]) {
  let emptyArray: number[] = [];
  for (let i: number = numList.length - 1; i >= 0; i--) {
    emptyArray.push(numList[i]);
    }
    return emptyArray;
  }
reverseArray(numList);

console.log(reverseArray(numList));
