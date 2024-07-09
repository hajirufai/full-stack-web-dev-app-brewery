import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});

// use bodyParser middleware
// app.use(bodyParser.urlencoded({extended: true}));

// create my custom middlware
// app.use((req, res, next)=>{
//     // console.log("Running my custom middleware..");
//     // console.log(".".repeat(79));
//     console.log("Request Method: ", req.method);
//     console.log("Response Status code: ", res.statusCode);
//     next(); // this 'keyword function' implies now it will go to the request handlers
// })

// create my custom middlware  called logger
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request url: ", req.url);
  console.log("Response Status code: ", res.statusCode);
  next();  // this is a must, otherwise it will be a loop
}

app.use(logger);

// Create my request handlers
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/About", (req, res) => {
  res.send("This is the About Page");
});
