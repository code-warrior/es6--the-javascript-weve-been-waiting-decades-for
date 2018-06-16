// Object destructuring
let pig = {
    subspecies_of: "wild boar",
    neuron_count: 425000000,
    feels_pain: true
};

let { subspecies_of, neuron_count, feels_pain } = pig;

console.log(`Pigs have ${neuron_count} neurons and are a sub species of ${subspecies_of}`);
console.log(`Pigs ${(feels_pain) ? `feel` : `don’t feel`} pain.\n-------`);

let song = {
    title: "Lost Snow",
    band: "MONO"
};

// Default value
let { title, band, year = 2004} = song;

console.log(`${title} is a song by ${band}, which was released in ${year}.`);
console.log(`${song.title} is a song by ${song.band}, which was released in ${song.year}.`); // Last binding is “undefined.”

title = 'The Kidnapper Bell';

console.log(`${title} is a song by ${band}.`);
console.log(`${song.title} is a song by ${song.band}.\n-------`);

let soundgarden = {
    vocalist: {
        name: {
            first: "Chris",
            last: "Cornell"
        }
    },
    guitarist: {
        name: {
            first: "Kim",
            last: "Thayil"
        }
    },
    bassist: {
        name: {
            first: "Ben",
            last: "Shepherd"
        }
    },
    drummer: {
        name: {
            first: "Matt",
            last: "Cameron"
        }
    }
};

let { vocalist: { name: vocalistName }, guitarist: { name: guitaristName } } = soundgarden;

console.log(`Soundgarden’s vocalist is ${vocalistName.first} ${vocalistName.last}.`);
console.log(`Soundgarden’s guitarist is ${guitaristName.first} ${guitaristName.last}.\n-------`);

let car = {
    make: "Tesla"
};

let { make, model = "Model S", vegan = true } = car;

console.log(`${make}’s ${model} ${(vegan)? "is" : "is not"} vegan.`);
console.log(`Is make in the car object? ${'make' in car}`);
console.log(`Is model in the car object? ${'model' in car}`);
