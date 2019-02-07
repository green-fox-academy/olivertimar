import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:

1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch

// Hint: You have to create a `print()` method as well */
let thing1: Thing = new Thing('Get milk');
let thing2: Thing = new Thing('Remove the obstacles');
let thing3: Thing = new Thing('Stand up');
let thing4: Thing = new Thing('Eat lunch')

thing3.complete();
thing4.complete();
