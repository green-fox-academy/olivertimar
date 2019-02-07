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
  name: string;
  age: number;
  isMale: boolean;

  constructor(pName: string, pAge: number, pIsMale: boolean) {
    this.name = pName;
    this.age = pAge;
    this.isMale = pIsMale;
  }
  introduce() {
    console.log(`Hi, I'm  ${ this.name }, and a ${ this.age } years old ${ this.isMale }`);
  }
  getGoal() {
    console.log('My goal is: Live for the moment!');
 }
}
let Person1 = new Person('Jane Dong', 30, false);
let Person2 = new Person('John Dong', 25, true);

Person1.introduce();
Person2.introduce();



