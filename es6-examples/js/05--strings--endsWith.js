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
// or
console.log(animal.endsWith(`p`));
