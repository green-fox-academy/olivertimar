'use strict';
export {};
let contains: boolean = false;
let arrayExam: number[][] = [
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
];
let i: number = 0;
let j: number = i + 1;
function isSymetric () {
  for (i; i < arrayExam.length; i++) {
    for (j; j < arrayExam.length; j++) {
      if (arrayExam[i][j] === arrayExam[j][i]) {
        //0.1 (0) === 1.0 (0) true
        contains = true;
        console.log(contains); //'false'
      } else {
        console.log(contains);
        return contains;
      }
    }
  }
}
isSymetric();
