/* Imports and exports must be at the top */
/* import the function sayMyName from name.js */
import {sayMyName} from "./name.js";

/* occupation and moonlighting act as const */
import {occupation, moonlighting} from "./occupation.js";

/* Import everything as a namespace import. */
import * as dogs from "./dogs.js";

/* Import the renamed function, or */
import { sayLoudly } from "./export-renaming.js";
console.log(sayLoudly());

/* Rename the imported function */
// import { sayLoudly as scream } from "./js/export-renaming.js";
// console.log(scream());

console.log(`${sayMyName()} works as a ${occupation} during the day and as a ${moonlighting} at night`);

console.log(`I have two dogs: ${dogs.getFirstDogName()} and ${dogs.getSecondDogName()}.`);
console.log(`${dogs.getFirstDogName()} is a ${dogs.getFirstDogBreed()} and is ${dogs.getFirstDogAge()} years old.`);
console.log(`${dogs.getSecondDogName()} is a ${dogs.getSecondDogBreed()} and is ${dogs.getSecondDogAge()} years old.`);
console.log(`Both do a lot of 💩`);

console.log(`---`);

dogs.setThirdDogName("Bubbles");
console.log(`If I got a third dog, I’d name them ${dogs.getThirdDogName()}`)
