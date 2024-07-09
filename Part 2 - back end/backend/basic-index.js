import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an express app and set the port number.
const app = express();
const port = 3000;

// Set EJS as the templating engine (optional)
app.set('view engine', 'ejs');

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Use the public folder for static files.
app.use(express.static("public"));

// Define your routes
app.get('/', (req, res) => {
  res.render('index'); // Render the index.ejs file
});

app.get('/redirect-example', (req, res) => {
  res.redirect('/destination'); // Redirect to /destination route
});

app.get('/destination', (req, res) => {
  res.render('destination'); // Render the destination.ejs file
});


// Listen on your predefined port and start the server
app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});


// AXIOS to GET DATA
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});