let greeting = function (name) {
    console.log(`Hello, ${ name }!`); // We used ` not ', for this function. "Back tick" under the tilda
}

greeting('Becky'); // Here, Becky is our first argument 
// I/O: input/output 

let printMyName = function(fName, lName) {
    let fullName = fName + " " + lName;
    console.log(`Hello, my name is ${ fullName }`)
}

printMyName ('Tyler', 'Lady');

let calculateBalance = function (debits, credits) {
    // parameter debits = [ numbers ]
    // parameter credits = [ numbers ]
    let total = 0;
    for (debit of debits) {
        total -= debit; //when running a loop(as this one) over an array, i value defaults to 0
    }
    for (credit of credits) {
        total += credit;
    }
    console.log(total);
}

let myDeb = [150.0, 34.00, 23.98];
let myCred = [1000.00, 50.00, 25.00];

calculateBalance(myDeb, myCred);