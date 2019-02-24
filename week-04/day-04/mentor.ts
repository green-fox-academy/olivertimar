/*
Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

    fields:
        level: the level of the mentor (junior / intermediate / senior)
    methods:
        getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
        introduce(): 'Hi, I'm name, a age year old gender level mentor.'

The Mentor class has the following constructors:

    Mentor(name, age, gender, level)
    Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

*/

'use strict';
export { Mentor };
import { Person } from './inheritance';

class Mentor extends Person{
  level: string;

  constructor(pName: string, pAge: number, pGender: string = 'female', pLevel: string = 'junior') {
    super(pName, pAge, pGender);
    this.level = pLevel;
    }
  introduce(): string {
    return `Hi, I'm ${ this.nev }, a ${ this.age } year old ${ this.gender } ${ this.level } mentor.`;
  }
  getGoal(): string {
    return 'My goal is: Educate brilliant junior software developers.';
  }
}
/*
export let Mentor1 = new Mentor('Jane Dong', 30);
export let Mentor2 = new Mentor('John Dong', 25, 'male', 'senior')

Mentor1.introduce();
Mentor1.getGoal();
Mentor2.introduce();
Mentor2.getGoal();
*/