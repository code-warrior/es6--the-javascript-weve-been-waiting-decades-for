// Functions: Default parameters

function dbConnection (dbName = `database`, dbHost = `localhost`, dbUser = `user`, dbPassword = `password`) {
    console.log(`The database’s name is %c${dbName}%c`, `color: blue`, `color: black`);
    console.log(`The host is %c${dbHost}%c`, `color: blue`, `color: black`);
    console.log(`The user is %c${dbUser}%c`, `color: blue`, `color: black`);
    console.log(`The password is %c${dbPassword}%c`, `color: blue`, `color: black`);
    console.log(`-------`);
}

// Invoke all the function’s default parameters; all are considered optional.
dbConnection();

// Over-ride the first default parameter with the “web-app” argument.
dbConnection(`web-app`);

// Over-ride the first two default parameters with the “web-app” and “168.1.2.3” arguments.
dbConnection(`web-app`, `168.1.2.3`);

// Over-ride all default parameters.
dbConnection(`web-app`, `168.1.2.3`, `roy`, `0ofyrbizniss`);

function sayDogsNames (dog1, dog2 = `Bela`) {
    console.log(`My first dog’s name is %c${dog1}%c`, `color: blue`, `color: black`);
    console.log(`My second dog’s name is %c${dog2}%c`, `color: blue`, `color: black`);
    console.log(`-------`);
}

// “undefined” is assigned to the variable “dog1”, because it is a required argument.
sayDogsNames();

// “Aria” is assigned to the first variable, and the second variable invokes the default parameter.
sayDogsNames(`Aria`);

function sayName(first, second = first) {
    return `${first} ${second}`;
}

console.log(`${sayName(`Sirhan`)} killed Bobby Kennedy.`);
console.log(`${sayName(`Johnny`, `Rotten`)} was supposed to be on Lockerbie.`);
