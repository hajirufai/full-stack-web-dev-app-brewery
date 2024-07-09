import express from "express";
import bodyParser  from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// use middleware bodyParser to parse body of post requests
app.use(bodyParser.urlencoded({extended: true}));

// handle the form request of street
app.post('/submit', (req, res)=>{
  console.log(req.body);  // this line is able to be printed because of bodyParser
  res.send("Done");
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
