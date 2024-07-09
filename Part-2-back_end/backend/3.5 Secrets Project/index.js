//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("Server is listening at port: ", port, "...");
});

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}));

app.get(['/', '/home'], (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

let isUserAuthorised = false

function passwordCheck(req, res, next){
    let password = req.body["password"];
    if (password == "ILoveProgramming"){
        isUserAuthorised = true;
    }
    else {
        isUserAuthorised = false;
    }
    next();
}

app.use(passwordCheck);

app.post('check', (req, res)=>{
    if (isUserAuthorised){
        res.sendFile(__dirname+'/public/secret.html');
    }
    else{
        res.redirect('/')
    }
});


