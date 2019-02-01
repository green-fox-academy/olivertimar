// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/file-manipulations/print-each-line/print-each-line.ts

'use strict';
export { };

const fs = require('fs');

function readMyFile() {
  try {
    let myFile: string = 'zsigi-megint-lemondta.txt';
    return fs.readFileSync(myFile, 'utf-8');
  } catch (error) {
    return 'Unable to read file: my-file.txt';
  }
}

console.log(readMyFile());