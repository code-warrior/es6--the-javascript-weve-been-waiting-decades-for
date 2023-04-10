// Strings: startsWith method
let animal = 'sheep';

// Does the string “sheep” start with the letter “s”?

// ES5
console.log('s' === animal[0]);
// or
console.log(animal.indexOf('s') === 0);

// ES6
// or
console.log(animal.startsWith(`s`));
console.log(animal.startsWith(`s`,0));
