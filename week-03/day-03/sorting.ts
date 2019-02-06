//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

//  Example: console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34] console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

/*function név (halmaz)
SORT -> 1-2-3-4 stb
igaz vs hamis*/

/*let szamLista: number[] = [1, 10, 123, 2, 27, 7291];
szamLista = szamLista.sort([0, 1, 3] => 0 - 1);*/

let szamLista: number[] = [1, 10, 123, 2, 27, 7291, 10, 1, 2];

function szortirozas (rest) {
  rest = rest.sort(function(a, b) {
    console.log(a, b)
    return a - b;
  });
  return rest;
}
szortirozas(szamLista);

console.log(szamLista);

