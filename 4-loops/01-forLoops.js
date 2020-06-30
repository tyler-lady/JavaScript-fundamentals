//let i = 7; //declare i -> initialize it with the value of 7

//For loop controller ie: ()
//pos1: Variable declaration and/or initialization
//pos2: Condition to run the loop (needs to be true)
//pos3: Incrementation or change to allow the condition to fail

for (let i = 0; i < 10; i++) { //Values in () called the loop control panel //set i to 0, while i is less than 10, increment by 1
    console.log('nice');//this section called the execution block
    // increment i
    //verify conditional (hop up if true, leave loop if false)
}

// Challenge: Using a for loop, console log 0 to 20 counting by 2's

for (x = 0; x <= 20; x +=2) {
    console.log(x);
}
//Scope: initializing variable outside of the loop is different than inside. They are different planes of existence; different "scopes". A small reality inside the larger one. "Perspective"

// Count from 10 to 0
for (j = 10; j >= 0; j--) {
    console.log(j);
}

let nameOne = "Patrick";
let pCharacter = nameOne[nameOne.length - 1];
console.log(pCharacter);

// Challenge:
// Use a for loop, create a name variable, console log each character

let name = "Toby";

for (i = 0; i < name.length; i++) {
    console.log(name[i]);
}

for (let n of name) {
    console.log(n);
}

let invoice = [3.1, 4.1, 89.98, 3.50];
let total = 0;

for (let i = 0; i < invoice.length; i++) {
    total = total + invoice[i];
}
console.log(total);

//Challenge:
//Write the previous section of code as a "For", "Of" code

for (let i of invoice) {
    totalTwo = 0 + invoice[i];
}
console.log(totalTwo)