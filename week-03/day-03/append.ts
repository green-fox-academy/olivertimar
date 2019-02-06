// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

'use strict';
export {};
let animals: string[] = ["koal", "pand", "zebr"];
let otheranimals: string[] = ["a"]

function addA (animals) {
  for (let i:number = 0; i < animals.length; i++) {
    animals[i] = animals[i] + otheranimals[0];
  }
}
addA(animals);
console.log(animals);

