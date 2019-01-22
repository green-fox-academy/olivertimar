'use strict';
export {};

for (let a: number = 1; a < 31; a++) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log('FizzBuzz');
    } else if (a % 5 === 0) {
    console.log('Buzz'); 
    } else if (a % 3 === 0) {
    console.log('Fizz');
} else {
        console.log(a);
      }
    }