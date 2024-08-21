// Creating a new datetime
// Create a new Date for January 1, 2000, at 13:37:42
// Note: Months are 0-indexed (0 = January)
// let myDate = new Date(2000, 0, 1, 13, 37, 42); 
// console.log(myDate); // Outputs: Sat Jan 01 2000 13:37:42 GMT...

// myDate = new Date(2024, 6, 22, 15, 45, 30);
// console.log(myDate);

// let date = new Date();
// console.log(date)
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString())

// ####################################################################################

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);  

// my_arr = {
//   fname: "haji",
//   lname: "rufai"
// }

// my_arr_2 = {
//   ...my_arr,
//   lname: "updated last name"
// }

// console.log(my_arr_2);

// map
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers);

// filter 
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (value) => value % 2 === 0;

const even = input.filter(isEven);
console.log(even)
/* result:
{
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  even: [2, 4, 6, 8, 10],
}
  */

const odd = input.filter((num)=>num%2!==0)
console.log(odd)

