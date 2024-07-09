'use strict';

const fs = require("fs");

// fs.writeFile("./text/sample.txt", "Hello world", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');  // this line will not be printede if err occurs
//   })


// read files
fs.readFile("./text/sample.txt", "utf-8", (err, data) => {  // Added the utf-8 to solve an output error
    if (err) throw err;
    console.log(data);
})