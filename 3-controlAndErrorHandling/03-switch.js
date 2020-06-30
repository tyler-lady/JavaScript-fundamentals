let officeCharacter = 'Pam';
​
switch (officeCharacter) {
  case 'Michael':
    console.log('My mind is going a mile an hour');
    break;
  case 'Dwight':
    console.log('Perfectenschlag');
    break;
  case 'Jim':
    console.log('Bears. Beets. Battlestar Glactica');
    break;
  default:
     console.log(`I'm sorry, ${ officeCharacter }, but do I know you?`);
}
​
let temperature = 12;
​
// >90, 'it's hot'
// >50, 'jacket'
// >0, 'coat'
​
switch (true) {
  case (temperature >= 90):
    console.log(`It's hot`);
    break;
  case (temperature < 90 && temperature >= 50):
    console.log('You need a jacket');
    break;
  case (temperature < 50 && temperature >= 0):
    console.log('You need a coat');
    break;
  default:
    console.log('You are colder than a lot of things');
}
​
​
​
​
let student = {
  classBadge: 'purple'
}
​
switch (student.classBadge) {
  case "gold":
  case "blue":
  case "red":
    console.log('Student is in the classroom');
    break;
  default:
    console.log('Student is out of the classroom');
}