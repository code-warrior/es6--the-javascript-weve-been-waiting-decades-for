// Array destructuring: Rest items

/// The Goethe Color Triangle
let theFirstNineColors = [
    "red",          // Primary color
    "yellow",       // Primary color
    "blue",         // Primary color
    "orange",       // Secondary color
    "green",        // Secondary color
    "violet",       // Secondary color
    "orange-green", // Tertiary color
    "green-violet", // Tertiary color
    "violet-orange" // Tertiary color
];

let [,,,...theSecondariesAndTertiaries] = theFirstNineColors;

// Loop through the new array, which contains the last six items in theFirstNineColors array.
for (let i = 0; i < theSecondariesAndTertiaries.length; i++) {
    if (i <= 2) {
        console.log(`${theSecondariesAndTertiaries[i]} is a secondary color.`);
    } else {
        console.log(`${theSecondariesAndTertiaries[i]} is a tertiary color.`);
    }
}

console.log(`-------`);

let [,,,...theTertiaries] = theSecondariesAndTertiaries;
console.log(`The tertiary colors are`);

for (let i = 0; i < theTertiaries.length; i++) {
    console.log("\t" + theTertiaries[i]);
}

console.log(`-------`);

// Cloning an array, the ES6 way
let myDogs= ["Aria", "Bela"];
let [...copyOfMyDogs] = myDogs;

console.log(myDogs);
console.log(copyOfMyDogs);
