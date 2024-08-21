// index.js

const cors = require('cors');
const express = require("express");
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define another route to handle POST requests
app.post("/data", (req, res) => {
  console.log(req.body);
  const receivedData = req.body;
  res.send(`Data received: ${JSON.stringify(receivedData)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
