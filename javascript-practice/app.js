
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

var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);
/*
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

*/

let position = characters.indexOf('Kenny');
console.log(position);

position = characters.indexOf('Luke');
console.log(position);

position = characters.lastIndexOf('Han');
console.log(position);





























