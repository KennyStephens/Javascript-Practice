
// ES6 (fat) Arrow functions
//work best in callback function scenarios
// parentheses around input if more than one
// curly braces around function body if more than one line/command
// return only needed if more than one line of code
/*
let numbers = [123, 234, 345, 456, 567];
let names = ['Alex', 'Bree', 'Cara', 'Cole', 'Devon', 'Riley'];

//simple function syntax
//create a new array of the values from the array greater than 300
let big = numbers.filter(function(item) {
    return item > 300;
});

//arrow function version
let bigA = numbers.filter(item => item > 300); 

console.log(big);
console.log(bigA);

names.forEach(function(item, index) {
    console.log(index, item);
});
names.forEach((item, index) => console.log(index, item));
*/


// SPLICE()
/*
0- Luke
1 - Leia
2 - han
3 - Chewie
*/
/*
var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);

characters.splice(0, 1,'Rey');
console.log(characters);

characters.splice(1, 2, 'Kylo');
console.log(characters);

characters.splice(1, 1, 'C3P0', 'R2D2');
console.log(characters);

characters.splice(1, 2);
console.log(characters);

characters.push('BB8');
characters.push('Obiwan');
console.log(characters);

characters.reverse();
console.log(characters);

characters.sort();
console.log(characters);



let position = characters.indexOf('Kenny');
console.log(position);

position = characters.indexOf('Luke');
console.log(position);

position = characters.lastIndexOf('Han');
console.log(position);
*/


//basic fetch
//using jsonplaceholder for the data
//Remember that fetch returns a promise
//HTTP status codes - http://www.restapitutorial.com/httpstatuscodes.html
//to test with NODE we need to install the node-fetch package
//  npm install node-fetch
//let fetch = require('node-fetch');


//get the details for a random user
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random() * 20) + 1;  //id 1 to 20
let uri = root + '/users/' + id;

console.log('FETCH: ', uri);
//any user id higher than 10 will generate a 404 error

fetch(uri)
    .then(function(response){
        if(response.status == 200){
            return response.json();
        } else {
            throw new Error('Invalid user ID');
        }
        
    })
    .then((data) => {
        console.log(data);
        let jsonData = JSON.stringify(data);

        let output = document.querySelector('.output');
        output.textContent = jsonData;
        console.log(data);
    })
    .catch( (err) => {
        console.log('ERROR: ', err.message);
    });





























