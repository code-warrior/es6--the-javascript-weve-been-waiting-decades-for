// Functions: Spread operator converts an array into separate items
let naturals = [0, 1, 2, 3];

function addAllTheArguments(...restParameters) {
    let sum = 0;

    for (let i = 0; i < restParameters.length; i++) {
        sum += parseInt(restParameters[i], 10);
    }

    return sum;
}

// Not the same as passing “0, 1, 2, 3”
console.log(Math.min(naturals));

// “Spread” the array into individual items
console.log(`The minimum of all the arguments is ${Math.min(...naturals)}.`);

// Not the same as passing “0, 1, 2, 3”
console.log(Math.max(naturals));

// “Spread” the array into individual items
console.log(`The maximum of all the arguments is ${Math.max(...naturals)}.`);

// Combine the spread operator with rest parameters
console.log(addAllTheArguments(...naturals));
