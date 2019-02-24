// -  Create variable named `nameToGreet` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `nameToGreet`

'use strict';
export {};
let nameToGreet: string = 'Greenfox';
let great: string = 'Hello mr ';
function greetin (greety, inputy) {
  if (inputy == '') {
    inputy = 'shit';
    console.log(greety, inputy);
  } else {
    console.log(greety, inputy);
    }
}
greetin(great, nameToGreet);
