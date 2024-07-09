import express from "express"

const app = express();
const port = 3001;

app.listen(port, ()=>{
    console.log(`Listening at localhost:${port}...`);
});

app.get('/', (req, res) => {
    res.send("Welcome to HomePage");
});

app.get('/About', (req, res) =>{
    res.send("This is the About Page")
})