// Functions: Arrow functions

// Function “a” accepts “value” as an argument and simply returns the same “value”.
//Since this function accepts only one argument, parens are not needed.
let a = value => value;

// We can also be redundant and use parens:
// let a = (value) => value;

//Same as…
// let a = function(value) {
//     return value;
// };

console.log(`The function ${a.name} returns ${a(3)}.`);

// The smallest arrow function you can write
let b = () => {};

// Same as…
// let b = function () {
// };

console.log(`The function ${b.name} returns ${b()}.`);

// If you have a function that requires more than one parameter, parens are required.
let c = (firstParameter, secondParameter) => firstParameter + secondParameter;

// Same as…
// let c = function (firstParameter, secondParameter) {
//     return firstParameter + secondParameter;
// };

console.log(`The function ${c.name} returns ${c(3, 4)}.`);

// Neither of the following accepts any parameters, but do return a string.
let getPet = () => `dog`;
let getPetName = () => `Aria`;

// Same as…
// let getPet = function () {
//     return `dog`;
// };
//
// let getPetName = function () {
//     return `Aria`;
// };

console.log(`My ${getPet()}’s name is ${getPetName()}.`);

let getFullName = (firstName, lastName) => {return `${firstName} ${lastName}`};
// Same as…
// let getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// But not the same as…
// let getFullName = (firstName, lastName) => {`${firstName} ${lastName}`};

console.log(`${getFullName("Ingrid", "Newkirk")} is a founder of PETA.`);

console.log(`-------\nClick the body to see the following example.\n-------`);

function createTeacher () {
    this.firstName = "Walter";
    this.lastName = "White";

    // Dovetail, or hook into, the outer “this” context.
    let _this = this;

    document.addEventListener("click", function () {
        console.log(`My name is ${_this.firstName} ${_this.lastName}.`);
    }, false);
}

// function createTeacher () {
//     this.firstName = "Gabe";
//     this.lastName = "Kotter";
//
//     document.addEventListener("click", (function () {
//         console.log(`Welcome back, Mr ${this.firstName} ${this.lastName}!`);
//     }).bind(this), false); // Bind “this” to the anonymous function
// }

// function createTeacher () {
//     this.firstName = "Edna";
//     this.lastName = "Krabappel";
//
//     document.addEventListener("click", () => {
//         console.log(`My name is ${this.firstName} ${this.lastName}.`);
//     }, false);
// }

createTeacher();
