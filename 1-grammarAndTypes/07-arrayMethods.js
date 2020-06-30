let coffee = ['espresso', 'nitro cold brew', 'cappuccino', 'americano', 'cappuccino', 'frappucino'];

console.log(coffee[2]);

let veryBest = coffee.pop();
console.log(veryBest);

console.log(coffee);

coffee.push('latte', 'decaf');
console.log(coffee);

// Stack -> LIFO, 
//Array.pop();
//Array.push(<item>);

//Queue -> line
//Array.shift();
//Array.unshift(<item>);

let firstItem = coffee.shift();
console.log(firstItem);
console.log(coffee);

coffee.unshift('instant', 'drip');
console.log(coffee);

console.log(coffee.indexOf('cappuccino'));
console.log(coffee.indexOf('cappuccino', 4));

// If indexOf returns something other than -1, keep looking but keep the number that comes back

coffee.forEach((item, index, array) => {
    console.log(item, index);
});

/*

This is the inside of the function
function forEach (callbackfn) {
    for( let i = 0; i < coffee.length; i++) {
        let itemToUse = coffee[i];
        let index = i;
        let currentArray = coffee;

        callbackfn(itemToUse, index, currentArray);
    }
}

forEach((item, index, myArray) => {
    console.log(item, index);
})

*/