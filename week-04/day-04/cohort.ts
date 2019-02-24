/*Create a Cohort class that has the following

    fields:
        name: the name of the cohort
        students: a list of Students
        mentors: a list of Mentors
    methods:
        addStudent(Student): adds the given Student to students list
        addMentor(Mentor): adds the given Mentor to mentors list
        info(): prints out 'The name cohort has students.size students and mentors.size mentors.'

The Cohort class has the following constructors:

    Cohort(name): beside the given parameter, it sets students and mentors as empty lists

*/
'use strict';

import { Student } from "./inheritance-students";
//import { Student1, Student2 } from "./inheritance-students";
import { Mentor } from "./mentor";
//import { Mentor1, Mentor2} from "./mentor";

export { Cohort };

class Cohort {
  nevCo: string;
  students: Student[] = [];
  mentors: Mentor[] = [];

  constructor (cName: string) {
  this.nevCo = cName;
}
  addStudent(Student: Student) {
    this.students.push(Student); //itt hozom létre az elemeket
    //this.students.push(Student1, Student2); => importálom a másik táblában létrehozott elemeket
  }
  addMentor(Mentor: Mentor) {
    this.mentors.push(Mentor);
  }
  info(): string {
    return `The ${ this.nevCo } cohort has ${ this.students.length } students and ${ this.mentors.length } mentors.`;
  }

}