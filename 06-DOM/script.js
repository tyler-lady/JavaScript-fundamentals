console.log('LOADED FILE!');



let myPTag = document.getElementById('testParagraph'
);

myPTag.style.color = 'blue';

console.log(document.querySelectorAll('p.sampleClass'));

document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed!';

let toChange = document.querySelectorAll('p.sampleClass');

toChange.forEach(tag => {
    tag.innerHTML = 'Hey I changed'; //Using the .innerHTML method over others allows entering html tags and text. It interprets it as HTML code.
})

// UI/UX: user interface/user experience; Front-end developer will have to deal with this
let myButton = document.getElementById('clickThisButton');
// might not need to hold it in a variable for a single event listener
document.getElementById('clickThisButton').addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue'
    } else {
        event.target.style.backgroundColor = 'red' ;
    }
})

myButton.addEventListener('mouseover',event => {
    event.target.style.fontSize = '30px'
})

// Code this control so that the button goes back down to size when not hovered over

let userInput;

document.getElementById('nameInput').addEventListener('keyup', event => {
    userInput = event.target.value;
    document.getElementById('theValue').innerText = userInput
})

// in the html create a button with unique id, and a p tag with a unique id
// when it is clicked, the p tag should read, "Hey the button was clicked!!"
//When the p tag is clickd, the text inside should say, "Hey no pushing!!"



document.getElementById('thisButton').addEventListener('click', event => {
    document.getElementById('uniqueP').innerText = "HEY THE BUTTON WAS CLICKED!!!"
})

document.getElementById('uniqueP').addEventListener('click', event => {
    document.getElementById('uniqueP').innerText = "Hey, no pushing!!";
})

/*
This was supposed to be a more efficient version of the code, but mine did not work
let button = document.getElementById('thisButton');
let iroh = document.getElementById('uniqueP')

button.addEventListener('click', event => {
    iroh.innertext = "HEY THE BUTTON WAS CLICKED!!";
})

iroh.addEventListener('click', event => {
    iroh.innerText = "Hey, no pushing!";
})
*/