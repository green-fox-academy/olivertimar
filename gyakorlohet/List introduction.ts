/*
List introduction 1

We are going to play with lists. Feel free to use the built-in methods where possible.

    Create an empty list which will contain names (strings)
    Print out the number of elements in the list
    Add William to the list
    Print out whether the list is empty or not
    Add John to the list
    Add Amanda to the list
    Print out the number of elements in the list
    Print out the 3rd element
    Iterate through the list and print out each name

    William
    John
    Amanda

    Iterate through the list and print

    1. William
    2. John
    3. Amanda
    
    Remove the 2nd element
    Iterate through the list in a reversed order and print out each name
    
    Amanda
    William
    
    Remove all elements
*/

let names: string[] = [];
console.log(names.length);
names.push('William');
console.log(names.length === 0);
names.push('John', 'Amanda');
console.log(names.length);
console.log(names[2]);
for (let i: number = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i: number = 0; i < names.length; i++) {
  console.log(i + 1 + '. ' + names[i]);
}

names.splice(1, 1);
console.log(names);
/*names.pop();
console.log(names);
names.shift();
console.log(names);*/
names.reverse();
console.log(names);
names.splice(0);
console.log(names);