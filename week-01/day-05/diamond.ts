'use strict';
export {};
let lines: number = 7;
let sor: string = '';

for (let i: number = 0; i < lines / 2; i++){
  for (let j: number = 0; j < lines /2 - i; j++){
   sor += ' ';
   }
   for(let k: number = 0; k <= i * 2; k++){
   sor += '*'; 
}
console.log(sor);
sor = '';
} 

let row: string = '';
for (let i: number = 0; i < lines; i++){  
   for(let k: number = 0; k < i + 1; k++){
   row += ' '; 
   }
   for (let j: number = 1; j <= lines / 2 + 1; j++){
   row += '*';
   }
console.log(row);
row = '';
} 