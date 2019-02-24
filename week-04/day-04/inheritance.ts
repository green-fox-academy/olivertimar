/*
Create a Person class with the following fields:

    name: the name of the person
    age: the age of the person (integer number)
    gender: the gender of the person (male / female)

And the following methods:

    introduce(): prints out 'Hi, I'm name, a age year old gender.'
    getGoal(): prints out 'My goal is: Live for the moment!'

And the following constructors:

    Person(name, age, gender)
    Person(): sets name to Jane Doe, age to 30, gender to female
*/

'use strict';
export { Person };
class Person {
  nev: string;
  age: number;
  gender: string;

  constructor(pName: string = 'Jane Doe', pAge: number = 30, pGender: string = 'female') {
    this.nev = pName;
    this.age = pAge;
    this.gender = pGender;
  }
  introduce(): string {
    return `Hello, I'm  ${ this.nev }, and a ${ this.age } years old ${ this.gender }`;
  }
  getGoal(): string {
    return 'My goal is: Live for the moment!';
 }
}

/*
function Persons () {
  let Person1 = new Person('Jane Dong', 30,);
  let Person2 = new Person('John Dong', 25, 'male');
}

//Person1.introduce();
//Person2.introduce();
*/
