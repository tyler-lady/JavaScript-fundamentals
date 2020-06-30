//Booleans
let isOn = true;

let isRaining = false;

//Boolean: true or false (this or that, yes or no)
// NULL
let empty = null;
//value = 0

//Undefined
let undef = undefined;
console.log(undef)

let whatAmI;
console.log(whatAmI);

// Numbers

let degrees = (90);
console.log(degrees);

// Can use type of to determine what type of variable you're dealing with:console.log(typeof(variable));

let ratherLarge = 999999999999999; // This is 15 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999; //This is 16 9's
console.log(whatIsGoingOnHere);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 +10) /10;
console.log(numbersAreHard);

let created = Number('123') // Will turn 123 into the number 123
console.log(created);

let abc = Number('z');
console.log(abc);


// Strings
let stringOne = "doubleydoos";
let stringTwo = 'singleydoos';
// Double or single quotes use is interchangeable, but best practice is to pick one and stick with it

let first = 1050 + 100;
let second = '1050' + 100;
let third = 1050 + '100';
let last = '1050' + "100";

console.log(first, second, third, last); //can log more than one at a time, but try to keep it under 5

let firstName = "Toby";
let lastName = "Johnson";

console.log(firstName + lastName); // Concatenation smashes the lists of characters together.
console.log(firstName + " " + lastName);

//escape characters
let myMessage = 'don\'t do this' // the backslash is escape character single quote 
console.log(myMessage);

//let myMessage = 'don\'t \ndo this'
// \n represents a tab


// Objects
//object - defines nearly every item/piece of info in JS - read about in time
let frodo = {
    race: 'Hobbit', //  A key, and then a value
    rings: 1,
    cloak: true,
    primaryWeapon: {
        name: 'Sting',
        attack: 30,
        damage: false
    }
};
console.log(typeof frodo);

//Arrays (Groupings of strings?)

let groceryList = [
    'banana',
    'kiwi',
    'coconut',
    21
];

let aThing = [23, {isOn: true, electricity: 'AC'}, ['wallaby']];

console.log(aThing instanceof Array);

//stack overflow, Developer, MDN Docs


// Strings: Methods

let userTitle = "    a DaY in tHE lIfe of dev";
console.log(userTitle.toUpperCase());
console.log(userTitle);
console.log(userTitle.trim())

console.log(userTitle.includes("in"));
