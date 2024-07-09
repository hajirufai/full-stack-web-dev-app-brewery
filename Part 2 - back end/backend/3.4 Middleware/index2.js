import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

// app.use(morgan("tiny"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res)=>{
  res.send("Welcome Home2");
  console.log("Client Accessed Home");
})



