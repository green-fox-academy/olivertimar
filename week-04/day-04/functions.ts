'use strict';
import { Person } from "./inheritance";
import { Student } from "./inheritance-students";
import { Mentor } from "./mentor";
import { Cohort } from "./cohort";

function Persons () {
  let Jane = new Person('Jane Dong', 30,);
  let John = new Person('John Dong', 25, 'male');
  let Ryan = new Person('Ryan Gosling', 40, 'male');
}

class Details {
  /*
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
  */

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





}