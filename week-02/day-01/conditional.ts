'use strict';
export {};

let a: number = 24;
let out: number = 0;

if (a % 2 == 0) {
  console.log(++out);
}

let b: number = 13;
let out2: string = '';

if (10 < b && b < 20) {
  out2 = "Sweet!";
} else if (10 > b) {
  out2 = "Less!";  
} else {
  out2 = "More!";
}
console.log(out2);

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && isBonus == false) {
  c = c - 2;  
} if (credits < 50 && isBonus == false) {
  c = c -1;  
} if (isBonus == true) {
  c = c;
}
console.log(c);

let d: number = 8;
let time: number = 120;
let out3: string = '';

if (d % 4 == 0 && time <= 200) {
  out3 = "Check.";
} if (time > 200) {
  out3 = "Time out.";
} else {
  out3 = "Run Forest Run"; 
}