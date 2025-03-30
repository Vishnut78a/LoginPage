//IMPORTS:-
import  routes from "../helperFunctions/routes/routes.js";
import  paths from "../helperFunctions/paths/paths.js";
import validator from  "../helperFunctions/validation/userRegValidation/userRegValidation.js";
import pswVisibility from "../helperFunctions/passwordVisibility/pswdVisibiliy.js";

//REFERENCES:-
var form = document.getElementById('form');
var login = document.getElementById('login');
var username = document.getElementById('userName');
var password = document.getElementById('password');
var passwordConfirm = document.getElementById('passwordConfirm');
var submit1 = document.getElementById('submit-parent');
var togglePassword = document.getElementById('showPassword');
var togglePasswordConfirm = document.getElementById('showPasswordConfirm');
var toggleErrorMessage = document.getElementById('error-message');
var successMessage = document.getElementById('success-message');
var usernameError = document.getElementById('userName-error');
var passwordError = document.getElementById('password-error');
   

//PAGE EVENTS:-
submit1.addEventListener("click",async function(){

await validator.userNameValidator(username,usernameError,successMessage);
validator.password1Validator(password,passwordError,successMessage);
validator.passwordConfirmValidator(username,password,passwordConfirm,successMessage,toggleErrorMessage,form);
    
   
});


togglePassword.addEventListener("click",function(){
    pswVisibility.togglePswdVisibility(password,togglePassword);
    
});

togglePasswordConfirm.addEventListener("click",function(){
    pswVisibility.togglePswdVisibility(passwordConfirm,togglePasswordConfirm);
});


login.addEventListener("click",function(){
    routes.routesFunction(paths.loginPage);
});




 /*
    if(username.value && (password.value ))
    if(password.value === passwordConfirm.value ){
     
        console.log(password.value);
        console.log(passwordConfirm.value);
        if(passwordValidator(passwordConfirm.value)){
            console.log("SUCCESSFULLY CREATED");
            toggleErrorMessage.innerText = 'Succesfully Registered!'
            toggleErrorMessage.style.color = '#00c49a';
        }else{
            toggleErrorMessage.style.color = 'red';
            toggleErrorMessage.innerHTML = 'Password must be at least <br>- 8-16 characters long and must contain  &nbsp;&nbsp;of <br> - an UpperCase, <br> - a LowerCase, <br> - a number and <br> - a special character' ;
           
            toggleErrorMessage.style.display = 'block';
            console.log("REQUIREMENTS DOESN'T MATCH");
        }
        
    }else{
        console.log("FAILED");
        console.log(password.value);
        console.log(passwordConfirm.value);
        toggleErrorMessage.style.color = 'red';
        toggleErrorMessage.innerHTML = 'Password must be at least <br>- 8-16 characters long and must contain  &nbsp;&nbsp;of <br> - an UpperCase, <br> - a LowerCase, <br> - a number and <br> - a special character' ;
        toggleErrorMessage.style.display = 'block';
    }
    */