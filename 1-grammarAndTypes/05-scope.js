let myName = 'Toby';

function someProcess () {
    const myName = 'Tyler';
    console.log(myName);
}

//someProcess();

//console.log(myName);
//The program will print the names in the order they are called in the code, regardless of order they are declared/initialized

//The inside of the function has two scopes to deal with. The scope of the function, and the parent scope (in this case the global scope)

let y = 12;

function scopey() {
    y = 33;
    console.log(y);
}

console.log(y);
scopey();
console.log(y);

let slope = 12;

function varTest() {
    let slope = 56;
    if (true) {
        let slope = 9001;
        console.log(slope);
    }
    console.log(slope);
}

varTest(); //9001, 9001
console.log(slope); //12