//IMPORTS:-
import  routes from "../helperFunctions/routes/routes.js";
import  paths from "../helperFunctions/paths/paths.js";

//REFERENCE:-
var signUpBtn = document.getElementById("signUp");

//LISTENERES:-

signUpBtn.addEventListener("click",function(){
    routes.routesFunction(paths.signUpPage);
});





