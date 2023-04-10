// Strings: includes method
let animal = `sheep`;

// ES5
console.log(animal.indexOf(`he`));
console.log(animal.indexOf(`ee`));
console.log(animal.indexOf(`they`));

// ES6
console.log(animal.includes(`he`));
console.log(animal.includes(`ee`, 2)); // Starting at index 2
console.log(animal.includes(`they`));
