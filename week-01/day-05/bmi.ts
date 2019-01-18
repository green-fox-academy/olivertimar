'use strict';
export {};
let massInKg: number = 81.2;
let heightInM: number = 1.78;
let b: number = (Math.pow(heightInM, 2));
let a: number = massInKg / b;
let c: number = Math.round(a * 100) / 100;
console.log(c);

if (c < 18.5) {
    console.log('Kórosan sovány vagy!');
} else if (c < 25) {
    console.log('Öcsém, te normális vagy. Ritka az ilyen.');
} else if (c < 30) {
    console.log('Daaaaagiiiiiii');
} else {
    console.log('Zsíííííír!');
}

