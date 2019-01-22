// Create a program that
// prints the multiplication table with number
// Example:
// The number 15 should print:
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75

'use strict';
export {};
let number: number = 15;
for (let i: number = 1; i < 11; i++) {
  console.log(i + " * " + number + " = " + number * i);
};

  