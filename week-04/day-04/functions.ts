'use strict';
import { Person } from "./inheritance";
import { Student } from "./inheritance-students";
import { Mentor } from "./mentor";
import { Sponsor } from "./sponsor";
import { Cohort } from "./cohort";

let people: any[] = [];
let Jane = new Person('Jane Dong', 30,);
people.push(Jane);
let John = new Person('John Dong', 25, 'male');
people.push(John);
let Ryan = new Person('Ryan Gosling', 40, 'male');
people.push(Ryan);
let Person1 = new Person();
people.push(Person1);
let Jackie = new Student('Jackie Chan', 30, 'The School of Life');
people.push(Jackie);
let Lorinc = new Student('Mészáros Lőrinc', 55, 'The School of Fools', 'male?', 10)
people.push(Lorinc);
let Barbara = new Mentor('Barbara Streisand', 30);
people.push(Barbara);
let John2 = new Mentor('John Malkovich', 46, 'male', 'senior pro');
people.push(John2);
let John3 = new Mentor('John Wayne', 75, 'male', 'senior')
people.push(John3);
let Elon = new Sponsor('Elon Musk', 46, 'SpaceX', 0, 'male');
people.push(Elon);

let Cohort1 = new Cohort('Bogyó és Babóca');

people.forEach(element => {
  if (element.constructor.name == 'Student') {
    Cohort1.addStudent(element);
  } else if (element.constructor.name == 'Mentor') {
    Cohort1.addMentor(element);
  }
});

let output: string = '';

people.forEach(element => {
  output += element.introduce();
  output+= '\r\n';
  output += element.getGoal();
  output+= '\r\n';
});

console.log(output);

//output: += Cohort1.info();

//const fs = require('fs');

//let fileContent = fs.writeFileSync('', 'utf-8');
//console.log(fileContent);

//for (let i = 0; i <= people.length; i++) {
//  elon.hire();}

/*az összes class egy helyen egy főtáblán amin ha megadom hogy student az új elem akkor 
  class Details {
  //person class
  name: string;
  age: number;
  gender: string;

  //student class
  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;

  //mentor class
  name: string;
  age: number;
  gender: string;
  level: string;

  //sponsor class
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  //cohort class
  name: string;
  students: Student[];
  mentors: Mentor[];


  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number;
  level: string;
  company: string;
  hiredStudents: number;
  //cohort
  cohortName: string;
  cohortStudents: Student[];
  cohortMentors: Mentor[];

*/


