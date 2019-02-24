// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo: string = 'Chinchill';
let appendy: string = 'a';
function appendAFunc (stringy: string, strangy: string) {
  stringy = stringy.concat(strangy);
  return stringy;
}
//appendAFunc(typo, appendy);
console.log(appendAFunc(typo, appendy));
