'use strict';
export {};
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600 2(ab+ac+bc)
// Volume: 1000 - a*b*c

let surface: number = 600;
let volume: number = 1000;

let a: number = 10;
console.log('All three sides equal: ' + a);
console.log('Volume equals "a*b*c": ' + Math.pow(a, 3));
console.log('Surface area equals "2(ab+ac+bc)": ' + 2 * (a * a + a * a + a * a));
