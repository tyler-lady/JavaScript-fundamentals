//The following functions were implemented with ES6

// FAT ARROW FUNCTION

let fatArrow = () => {
    console.log('I reside in the NEW way of writing functions.');
}

fatArrow();

// CONCISE BODY FUNCTION

let conciseBody = () => console.log('I am concise.');
conciseBody();

// Can only have a single line to define the function. This type of function does one thing only

// BLOCK BODY: allows for multiple line statements. Stating: "I have a definition block"

let blockBody = () => {
    let y = 0;
    y += 4;
    console.log(y);
}
// Needs to be told to return.

blockBody();

// ES6 functions do not use hoisting