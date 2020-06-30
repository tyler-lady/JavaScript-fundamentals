function hi() {
    console.log('Ayo');
}

hi();
hi;
console.log(hi);



// Create a function that, when invoked, lists out he numbers between 1-10;

let printNumbers = function () {
    for (let i = 1; i < 10; i++) {
    console.log(i);
    }
}
printNumbers();

//console.log(printNumbers); spits out the name of the function, but doesn't run the process
//If expressing a function, using a variable, it does not have to have a name. Declaring a function, w/o the usage of a variable does require us to give it a name