// Strings: startsWith method
let animal = 'sheep';

// Does the string “sheep” start with the letter “s”?

// ES5
console.log('s' === animal[0]);
// or
console.log(animal.indexOf('s') === 0);

// ES6
console.log(animal.startsWith(`s`));
// Same as looking for “s” at position 0
console.log(animal.startsWith(`s`,0));
// But, this fails, because “s” isn’t found at position, not index, 1
