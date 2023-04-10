// “i” is accessible but “undefined.”
console.log(`The value of i is “${i}”`);

// “i” is hoisted to the top of this scope, but initialized below.
for (var i = 0; i < 2; i++) {
    console.log(`The value of i in the loop is “${i}”`);
}

// “i” is available and holds the last value calculated in the for loop
console.log(`The value of i is “${i}”`);
