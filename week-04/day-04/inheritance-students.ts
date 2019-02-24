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
  previousOrganization: string;
  skippedDays: number;

  constructor(pName: string, pAge: number, pPrevOrg: string, pGender: string = 'female', pSkippedD: number = 0) {
    super(pName, pAge, pGender);
    this.previousOrganization = pPrevOrg;
    this.skippedDays = pSkippedD;
    }
  introduce(): string {
    return `Hi, I'm ${ this.nev }, a ${ this.age } year old ${ this.gender } from ${ this.previousOrganization } who skipped ${ this.skippedDays } days from the course already.`;
  }
  getGoal(): string {
    return 'My goal is: Be a junior software developer.';
  }
  skipDays(numberOfDays: number) {
    this.skippedDays += numberOfDays;
  }
}

/*
export let Student1 = new Student('Jane Dong', 30, 'The School of Life');
export let Student2 = new Student('John Dong', 25, 'The School of Fools', 'male', 10)

Student1.introduce();
Student1.getGoal();
Student2.introduce();
Student2.getGoal();
*/