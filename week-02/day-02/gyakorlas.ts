'use strict';
export {};
function greetFoxLog() {
  console.log('heello greenfox')  
};
greetFoxLog();

function greetByName(name: string) {
  console.log(arguments);
  console.log('Well hi there,', name);
}

greetByName('XXX');

// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

let baseNum: number = 123;
let double: number = 2;

function doubling() {
  let doubling_baseNum: number = baseNum * double;
  return doubling_baseNum;
 };

console.log(doubling());

// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`

let nameToGreet: string = 'greenfox';

function greet(nameToGreet) {
  if (nameToGreet == 0) {
    console.log('No name given!');
  } else {
    console.log ('Greeting Mr. ' + nameToGreet);
  }
}
greet(nameToGreet);

// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo: string = 'Chinchill';
let a: string = 'a';

function appendAFunc(typo: string, a: string): string {
  let word: string = typo + a;
  return word;
}
console.log (appendAFunc(typo, a));

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

/* let num: number = 0;
function sum(num: number): number {
  let summed: number = num + num;
  return summed;
}
console.log(sum(num));
*/

// -  Create a function called `factorio`
//    that returns it's input's factorial

// function factorio() {}

console.log(['apple', 'pear', 'melon'].indexOf('pear')); // 1

['apple', 'pear', 'melon'].forEach(function(e, i) {
  console.log(e, i);
});

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

let drinks: any = ['gin', 'whiskey', 'wine', 'beer'];
let clone: any = drinks.slice(0);
Array.prototype.drinks = function() {
  return this.slice(0);
};
console.log(drinks.slice(0, 3));