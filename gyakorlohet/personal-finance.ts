'use strict';

/*
We are going to represent our expenses in a list containing integers.

    Create a list with the following items.
        500, 1000, 1250, 175, 800 and 120
        Create an application which solves the following problems.
        How much did we spend?
        Which was our greatest expense?
        Which was our cheapest spending?
        What was the average amount of our spendings?
        */
       
let xPenses: number[] = [500, 1000, 1250, 175, 800, 120];

function avg(number) {
  let avi: number = 0;
  for (let i: number = 0; i < number.length; i++) {
    avi += number[i];
  }
  console.log(avi / number.length);
  return avi / number.length;
}

function problemSolver (ex) {
  console.log(Math.max(...ex));
  console.log(Math.min(...ex));
  let sum = ex.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    );
  console.log(sum);
  avg(ex);
}
problemSolver(xPenses);
