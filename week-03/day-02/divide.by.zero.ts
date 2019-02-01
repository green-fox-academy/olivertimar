// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/file-manipulations/divide-by-zero/divide-by-zero.ts

'use strict';

import { readFile } from "fs";

export {};
/*

function divide (age: number) {
  if (age <= 0) {
    console.log('Idiot.');
  } else {
    console.log(age / 10);
  }
}

divide (100); */


// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/file-manipulations/print-each-line/print-each-line.ts

const fs = require('fs');
/*const data: string = 'You are unable to read, idiot';
function () {
  let textOli: string = 
  */

try {
  let zsigiContent = fs.readFileSync('zsigi.megint.lemondta.txt', 'utf-8');
  if (zsigiContent) {
   console.log(zsigiContent);
  } else {
    throw new Error('Error dumbass!');
  }
 } catch (Error) {
   console.log(Error.message);
 } finally {
   console.log('WTF is finally?!')
 }


