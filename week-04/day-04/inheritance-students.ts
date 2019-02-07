/*
Create a Student class that has the same fields and methods as the Person class, and has the following additional

    fields:
        previousOrganization: the name of the student’s previous company / school
        skippedDays: the number of days skipped from the course
    methods:
        getGoal(): prints out 'My goal is: Be a junior software developer.'
        introduce(): 'Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already.'
        skipDays(numberOfDays): increases skippedDays by numberOfDays

The Student class has the following constructors:

    Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
    Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

*/

'use strict';
export { Student };
import { Person } from './inheritance';

class Student extends Person{
  name: string;
  age: number;
  isMale: boolean;
  previousOrganization: string;
  skippedDays: number;

  constructor(pName: string, pAge: number, pIsMale: boolean, pPrevOrg: string, pSkippedD: number = 0) {
    super(pName, pAge, pIsMale);
    this.previousOrganization = pPrevOrg;
    this.skippedDays = pSkippedD;
    }
  }
  introduce() {
    console.log(`Hi, I'm ${ this.name }, a ${ this.age } year old ${ this.isMale } from ${ this.previousOrganization } who skipped ${ this.skippedDays } days from the course already.`);
  }
  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }
  skipDays(numberOfDays) {
    numberOfDays++;
  }
}
let Student1 = new Student('Jane Dong', 30, false, 'The School of Life');
let Student2 = new Student('John Dong', 25, true, 'The School of Fools', 10)

Student1.introduce();
Student2.introduce();
 
 

