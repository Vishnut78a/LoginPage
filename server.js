//import express 
//create a port 
//create routes
//listen to that port:-
import path from "path";
import express  from "express";
import mongoose from "mongoose";
import crud from "./DataBase/crudOperations/crud.js";
import { fileURLToPath } from 'url';

const app = express();
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url); // Get the current file path
const __dirname = path.dirname(__filename); // Get the directory name
console.log(__dirname);
console.log(__filename);

//SERVER SETUP
app.use(express.static(path.join(__dirname,"public")));  //LOOKS FOR CSS,JS 
app.set('view engine','ejs');                              
app.set('views',path.join(__dirname,'views'));           //LOOKS FOR HTML 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//DB SETUP


mongoose
.connect('mongodb://0.0.0.0/userDB')
.then(()=>{console.log("Connected to DataBase")})
.catch((err)=>{"Error Connecting to DataBase"+err});

//DB SETUP
//SERVER SETUP

//try adding mongoose dependent files outside the public folder and directly import it to server.js

//ROUTES
app.get('/login',function(req,res){
    console.log(__dirname);
    res.render("accountCreation&Login/login/login"); 
    console.log(req.body);
});


app.get('/register',function(req,res){
    res.render("accountCreation&Login/register/register");
    console.log(req.body+"E");
    //const {userName,password} = req.body;
    //crud.createUser(userName,password);
})


/*
app.get('/userPages',function(req,res){
    res.render("userPages/user_registered");
    console.log(res.body);
})
*/
app.post('/userPages',function(req,res){
    console.log(req.body);
    const {userName,password} = req.body;
    crud.createUser(userName,password);
    
    res.render("userPages/user_registered");
})


//DEFAULT
app.get('/',function(req,res){
    res.redirect('/register');
    console.log(req.body+"A");
})
//DEFAULT


//ROUTES



//SERVER LIVE
app.listen(PORT,function(){console.log("Server Started!!")});
//SERVER LIVE