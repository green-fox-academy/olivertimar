'use strict';
export { };
let numberOfLines: number = 4;
function drawDiagonal(numberOfLines) {
  for (let i: number = 0; i < numberOfLines; i++) {
    let basicArray: number[] = [0, 0, 0, 0];
    basicArray[basicArray.length - 1 - i] = 1;
    console.log(basicArray);
  }
}
drawDiagonal(numberOfLines);
