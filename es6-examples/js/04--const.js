// The following items never change, so “const” is more appropriate than “let.”
const FIRST_NAME = 'Alan';
const LAST_NAME = 'Turing';
const DOB = '23 June 1912';

console.log(FIRST_NAME + ' ' + LAST_NAME + ' was born on ' + DOB);

console.log('-------');

// Using “let” instead of “const” for the following items makes sense.
let boxersFirstName = 'Cassius';
let boxersLastName = 'Clay';

console.log(boxersFirstName + ' ' + boxersLastName + ' was born in 1942');

boxersFirstName = 'Muhammad';
boxersLastName = 'Ali';

console.log('In the early 1960s, he changed his name to ' + boxersFirstName + ' ' + boxersLastName);

console.log('-------');

const trailerParkBoys = {
    'cast': [
        'Ricky',
        'Julian',
        'Bubbles'
    ]
};

// The “const” declaration won’t allow the following. A “let” or “var” declaration would allow it, however.
trailerParkBoys = {
  'director': 'Mike Clattenburg'
};

console.log('Trailer Park Boys is directed by ' + trailerParkBoys.director);
