// Array destructuring
let beatles = ["Ringo", "George", "John", "Paul"];
let [drummer, guitarist] = beatles;

console.log(`The Beatles’ drummer was ${drummer}`);
console.log(`The Beatles’ primary guitarist was ${guitarist}`);

// Skip over “Ringo”, “George”, and “John” to get at “Paul”
let [,,,yesterdaySinger] = beatles;

console.log(`The Beatles’ Yesterday was sung by ${yesterdaySinger}.\n-------`);

// Skip over “Ringo” to get at “George”
let [,somethingSinger] = beatles;
console.log(`The Beatles’ Something was sung by ${somethingSinger}.\n-------`);

let colors = ["red", "green", "blue"],
    firstColor = "black",
    secondColor = "purple";

console.log(`The value of firstColor is ${firstColor}.`);
console.log(`The value of secondColor is ${secondColor}.`);

[firstColor, secondColor] = colors;

console.log(`The value of firstColor is now ${firstColor}.`);
console.log(`The value of secondColor is now ${secondColor}.\n-------`);

// Typical swapping procedure
let a = 1,
    b = 2,
    hold;

console.log(`The value of a is ${a}.`);
console.log(`The value of b is ${b}.`);

hold = a;
a = b;
b = hold;

console.log(`The value of a is ${a}.`);
console.log(`The value of b is ${b}.`);

// Swapping made easier via ES6
[a, b] = [b, a];

console.log(`The value of a is ${a}.`);
console.log(`The value of b is ${b}.\n-------`);

// Default Values
let animals = ["dog"];
let [firstPet, secondPet = "chipmunk"] = animals;

console.log(`Does animals[0] equal firstPet? ${(animals[0] === firstPet)}`);
console.log(`Does animals[1] equal secondPet? ${(animals[1] === secondPet)}\n-------`);

// Nested Array Destructuring
let nirvana = [
    "Kurdt Cobain",
    ["Aaron Burckhard", "Dave Foster", "Chad Channing", "Dan Peters", "Dave Grohl"],
    "Krist Novoselic"
];
let [singer,
    [,,bleachDrummer,,lastDrummer],
    bassist] = nirvana;

console.log(`Nirvana’s line up for the recording of Bleach was ${singer}, ${bassist}, and ${bleachDrummer}.`);
console.log(`Nirvana’s line up in 1994, the year they disbanded, was ${singer}, ${bassist}, and ${lastDrummer}.`);
