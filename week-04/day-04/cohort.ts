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
import { Student1, Student2};
import { Mentor } from "./mentor";

export {};

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor (cName: string = 'Bogyo es Baboca', ) {
  this.name = cName;
}
  addStudent(Student) {
    this.students.push(new Student); //itt hozom létre az elemeket
    //this.students.push(Student1, Student2); => importálom a másik táblában létrehozott elemeket
  }

}