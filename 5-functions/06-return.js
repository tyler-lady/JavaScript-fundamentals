let returnToSender = () => {
    return 'not here';
}

let value = returnToSender();

console.log(value);

let what = () => 'testing'; //Concise body function has an implied return 

let hmmm = what();
console.log(hmmm);

let huh = () => returnToSender();

let guess = huh();

console.log(guess);
// A very common setup that we will interact with often in JS
// You can return anything

function whatCanIDo(){
    return 6;
}

// IIFE -> Immediately invoked function expression
(function () {
    console.log('abc123')
})(); //Expressing 'call a unit now'

// Ex: A function logging when people visit site. If there's something you don't want bogginig memory and being called once.