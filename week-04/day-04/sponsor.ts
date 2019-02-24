'use strict';
export { Sponsor };
import { Person } from './inheritance';
       
class Sponsor extends Person{
  company: string;
  hiredStudents: number;

  constructor(pName: string, pAge: number, pCompany: string, pHiredStudents: number = 0, pGender: string = 'female') {
    super(pName, pAge, pGender);
    this.hiredStudents = pHiredStudents;
    this.company = pCompany;
    }
    introduce(): string {
      return `Hi, I'm ${ this.nev }, a ${ this.age } year old ${ this.gender } who represents ${ this.company } and hired ${ this.hiredStudents } students so far.`;
    }
    hire() {
      this.hiredStudents++;
    }
    getGoal(): string {
      return 'My goal is: Hire brilliant junior software developers.';
    }
}

/*
let Sponsor1 = new Sponsor('Jane Dong', 30, 'Google');
let Sponsor2 = new Sponsor('John Dong', 25, 'Microsoft', 10, 'male')

Sponsor1.introduce();
Sponsor1.getGoal();
Sponsor2.introduce();
Sponsor2.getGoal();
*/