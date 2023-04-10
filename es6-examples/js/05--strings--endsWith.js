// Strings: endsWith method
let animal = `sheep`;

// Does the string “sheep” end in the letter “p”?

// ES5
console.log((`p` === animal[animal.length - 1]));
// or
console.log(animal.indexOf(`p`) === animal.length - 1);

// ES6
console.log(animal.endsWith(`p`, animal.length));
// or
console.log(animal.endsWith(`p`, 5)); // Note: position 5, not index 5
// or
console.log(animal.endsWith(`p`));
