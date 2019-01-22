'use strict';
export {};

let d = 8;
let time = 120;
let out3 = '';

if (d % 4 == 0 && time <= 200) {
  out3 = "Check.";
} if (time > 200) {
  out3 = "Time out.";
} else {
  out3 = "Run Forest Run"; 
}