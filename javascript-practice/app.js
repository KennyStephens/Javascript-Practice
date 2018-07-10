
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

/*
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

*/

// nested loops and multi-dimensional objects
// We can use nested loops to access all the elements
// inside multi-dimensional arrays or objects

let twoD = [[1, 2, 3, 4, 5, 6, 7],
           [8, 10, 5, 7, 3, 22, 6, 42],
           [123, 54, 12, 11, 9, 15]];

let bigHero = {characters:[
                {name:'Hiro', voice:'Ryan Potter'},
                {name:'Baymax', voice:'Scott Adsit', prop:12},
                {name:'Go Go Tamago', voice:'Jamie Chung'},
                {name:'Fred', voice:'T.J. Miller'}
            ]};

let chars = bigHero.characters;
for(let i = 0, len = chars.length; i < len; i++) {
    // console.log(chars[i]);
    // console.log(chars[i].name);
    // console.log(chars[i].voice);
    for(let prop in chars[i]){
        console.log(prop, chars[i][prop]);
    }
}

// Nested for loops
// let rows = twoD.length;
// for(let i = 0; i < rows; i++){
//     let items = twoD[i].length;
//     console.log(i, items);
//     for(let n = 0; n < items; n++){
//         console.log(twoD[i][n]);
//     }
// }




























