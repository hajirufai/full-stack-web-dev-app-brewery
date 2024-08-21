var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// const products = [
//     { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
//     { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
//     { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
//     { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
//     { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
// ];

// const productName = products.map(product => product.name);
// console.log(productName);

//Filter - Create a new array by keeping the items that return true.
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length < 6);

// console.log(result);

//Reduce - Accumulate a value by doing something to each item in an array.
var array = [36, 25, 6, 15];

// array.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0); // 36 + 25 + 6 + 15 = 82

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


// EXercise
// create a new array that has meaning truncated to a maximum of 100 Characters

import emojipedia from "./emojipedia"

console.log(emojipedia)

// map, filter, reduce, substring
var emojipediaMeaning = emojipedia.map(emoji => emoji.meaning.substring(0, 10))
console.log(emojipediaMeaning)


