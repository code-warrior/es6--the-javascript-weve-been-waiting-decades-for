// Strings: Template literals
let scientificName = 'Tamias';

console.log(`A chipmunk’s scientific name is ${scientificName}.\n-------`);

let albums = [
    `Music Has the Right to Children`,
    `Geogaddi`,
    `The Campfire Headphase`,
    `Tomorrow’s Harvest`
];

console.log(`As of June 2018, the band has put out ${albums.length} albums.\n-------`);

function getMyDogsNames () {
    return 'Aria and Bela';
}

console.log(`I have two awesome dogs: ${getMyDogsNames()}.`);
console.log(`Sometimes I have to scream their names: ${getMyDogsNames().toUpperCase()}!`);
