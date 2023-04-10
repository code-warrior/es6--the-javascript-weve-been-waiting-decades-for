// Functions: Rest parameters convert multiple items into an array

function renderArgumentValues(arbitraryParameter, ...restParameters) {
    console.log(`arbitraryParameter is of type ${typeof arbitraryParameter}.`);
    console.log(`restParameters is of type ${typeof restParameters}.\n-------`);
    console.log(`restParameters.length is ${restParameters.length}`);
    console.log(`arguments.length is ${arguments.length}\n-------`);
    console.log(`restParameters[0] is ${restParameters[0]}`);
    console.log(`arguments[0] is ${arguments[0]}\n-------`);
    console.log(`restParameters[1] is ${restParameters[1]}`);
    console.log(`arguments[1] is ${arguments[1]}\n-------`);
    console.log(`restParameters[2] is ${restParameters[2]}`);
    console.log(`arguments[2] is ${arguments[2]}`);
}

// arbitraryParameter⤵︎ restParameters⤵︎            ⤵︎             ⤵︎
renderArgumentValues(`Call me`, `Aloisus`, `Devadander`, `Abercrombie`);
