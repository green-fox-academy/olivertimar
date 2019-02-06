
// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is*/

let lineCount: number = 6;
let bc: string = '%%%%%';
let szpesz: string = '    ';
let times: number = 0;

for (; times < 4; times++) {
  console.log(bc.replace('a', szpesz));
}

/*
for (;times < 4; times++) {
  console.log(b + szpesz + b)
}

console.log(b);

/*while (times < 3) {
  times++;
  b = b + b;
  console.log(b);
};
b = '%';
times = 0;

for (times; times < 4; times++) {
  console.log(b + szpesz + szpesz + b);
};

for (let times: number = 0; times < 3; times++) {
  b = b + b;
  console.log(b);
}


//for (let i: number = 0; i < lineCount; i++) {

//}*/