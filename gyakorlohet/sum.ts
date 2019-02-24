// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
let zer: number = 0;
let nummy = [0, 1, 2, 13, 124];
function summy (aszam, bszam) {
  nummy.reduce(function(aszam, bszam) {
  return aszam + bszam;
  });
}
summy(nummy, zer);
console.log(summy(nummy, zer));
