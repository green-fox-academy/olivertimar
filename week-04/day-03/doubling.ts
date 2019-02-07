// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strict';
export {};
let drinks: string[] = ['gin', 'whiskey', 'wine', 'beer'];
//drinks = drinks.unshift(drinks);
for (let i: number = 0; i < 4; i++) {
  drinks[] = drinks[i].concat(drinks[i]);
  console.log(drinks);
}
