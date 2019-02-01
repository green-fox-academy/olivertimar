/* t a class that has

    a backgroundColor
    a text on it
    a textColor

Create a few example post-it objects:

    an orange with blue text: "Idea 1"
    a pink with black text: "Awesome"
    a yellow with green text: "Superb!"

 */
'use strict';
export {};

class PostIt {
  backgroundcolor: string;
  text: string;
  textColor: string; 
  constructor(bgcolor, textOfPostIt, textColorOfPostIt) {
    this.backgroundcolor = bgcolor;
    this.text = textOfPostIt;
    this.textColor = textOfPostIt;
  }
}
let PostIt1 = new PostIt('orange', 'blue', 'Idea1');
let PostIt2 = new PostIt('pink', 'black', 'Awesome');
let PostIt3 = new PostIt('yellow', 'green', 'Superb!');
console.log(PostIt1);
console.log(PostIt2);
console.log(PostIt3);