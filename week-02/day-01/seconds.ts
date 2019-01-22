'use strict';
export {};
let currendHours: number = 14;
let currendMinutes: number = 34;
let currendSeconds: number = 42;

let minute: number = 60;
let hour: number = 60;
let day: number = 24;

let remainingSeconds: number = minute * hour * currendHours + minute * currendMinutes + currendSeconds;

console.log(remainingSeconds + ' seconds left from this beautiful day.');