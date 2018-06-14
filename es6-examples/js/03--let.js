// “j” is not defined.
// console.log('The value of j is “' + j + '”');

// “j” is scoped to the for loop, just like C and Java would do.
for (let j = 0; j < 2; j++) {
    console.log('The value of j in the loop is “' + j + '”');
}

// “j” is not available here, because it’s being invoked outside its scope in the for loop.
// console.log('The value of j is “' + j + '”');

// I can use “j” again without any scope issues.
for (let j = 0; j < 2; j++) {
    console.log('The value of j in the loop is “' + j + '”');
}
