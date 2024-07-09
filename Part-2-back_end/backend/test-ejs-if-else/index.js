import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}...`);
});

app.use(bodyParser.urlencoded({ extended: true }));

// Write your handlers and code
app.get(['/', '/home'], (req, res)=>{
  res.render('index.ejs', {
    "myVar": "Haji rufai",
    myVar2: "Or you can write this way, where the key has no quotes"
    // prefer myVar2
  });
});

