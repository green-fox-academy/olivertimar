/* 
Create an Animal class

    Every animal has a hunger value, which is a whole number
    Every animal has a thirst value, which is a whole number
    when creating a new animal object these values are created with the default 50 value
    Every animal can eat() which decreases their hunger by one
    Every animal can drink() which decreases their thirst by one
    Every animal can play() which increases both by one

 */
'use strict';
export { };

class Animal {
  hunger: number;
  thirst: number;

  constructor(ehseg = 50, szomj = 50) {
    this.hunger = ehseg;
    this.thirst = szomj;
  }

   eat () {
    this.hunger--;
  }

   drink () {
    this.thirst--;
  }

   play () {
    this.hunger++;
    this.thirst++
  }
}
