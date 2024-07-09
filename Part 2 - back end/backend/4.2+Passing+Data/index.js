import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get(["/", "/home"], (req, res) => {
  res.render('index.ejs');  // By defailt they are in: __dirname + '/views/'
});

app.post("/submit", (req, res) => {   
  res.render('submit.ejs', {
    fName: req.body["fName"],
    lName: req.body["lName"]
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
