'use strict';

// testing lists and forEach
// const fruits = ["apple", "banana", "cherry", "avocado"];

// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });

// Generate a random number
// Math.floor(Math.random() * 10) // Will return a integer between 0 and 9
// Math.floor(Math.random() * 11) // Will return a integer between 0 and 10


// test for existence of variables
// const a = "ksdfhdaf";
// const b = "";
// // b = "haji";  // error: assignnment to constant variable
// const c = -Infinity  // runs
// const d = 0;  // not run since it is a falsy value
// const e = undefined;  // not run since it is a falsy value

// if (e){
//     console.log("RUn since it is defined");
// }
// else {
//     console.log("Run this since it is not defined");
// }


// YEars
// let today = new Date();
// let current_year = today.getFullYear();
// console.log("today: ", today,);
// const current_year = new Date().getFullYear();
// console.log("current_year: ", current_year);

// print variable many times repeat
// console.log('.'.repeat(79));

// let data;  // will not run (in if-statement if it is not initialized)
// console.log(data);
// if (data){  // will not run
//     console.log("data is defined");  
// }


// let data;
// if (!data) {
// console.log("Data is not yet defined");
// }

// forEach
// let fruits = ["apple", "banana", "cherry", "donut", "eggfruit"];
// fruits.forEach(item => { console.log(item)});

// find - the find method returns the first object of a list/array that satisifes a condition
// eg find the name of minor in the following:
// const groupA = [
//     { name: "Haji", age: 26 },
//     { name: "Rufai", age: 23 },
//     { name: "Yusuf", age: 14 },
//     { name: "Mohamed", age: 18 }
// ];

// function declaration
// function isMinor(person){
//     return person.age < 18;
// }


// Arrow function - DOES NOT HAVE 'function' keyword
// const isMinor = (person) => person.age < 18

// code implementation
// const minor = groupA.find((person)=> person.age < 18);
// const minor = groupA.find(isMinor);

// console.log(minor, typeof(minor))  // undefined / item
// if (minor) {
//     console.log(minor.name);
// } else {
//     console.log("No minor found");
// }

// filter method in js
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length < 6);
// console.log(result);  // output: [ 'spray', 'limit', 'elite' ]

// slice method in js
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);

// replace items in a list using index
// const fruits = ["apple", "banana", "car", "donuts", "eggplant"];
// fruits[2] = "cherry";
// console.log(fruits);


// splice method in js:
// Array.splice( index, remove_count, item_list )

// the slice method returns an array/list[] of removed elements
// delete  last element (index=-1) using slice
let fruits = ["apple", "banana", "cherry"];
fruits.splice(-1, 1,);
console.log(fruits);  // output: [ 'apple', 'banana' ]

// delete element at index 1
fruits = ["apple", "banana", "cherry", "donut"];
fruits.splice(1, 1,);
console.log(fruits);
