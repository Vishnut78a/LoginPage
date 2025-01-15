
var username = document.getElementById('userName');
var password = document.getElementById('password');
var passwordConfirm = document.getElementById('passwordConfirm');
var submit = document.getElementById('submit-parent');
var togglePassword = document.getElementById('showPassword');
var togglePasswordConfirm = document.getElementById('showPasswordConfirm');
var toggleErrorMessage = document.getElementById('error-message');
var successMessage = document.getElementById('success-message');
var usernameError = document.getElementById('userName-error');
var passwordError = document.getElementById('password-error');



submit.addEventListener("click",function(){
    function userNameValidator(){
        if(username.value){
            usernameError.style.display = 'none';
        }else{
            usernameError.style.display = 'block';
            toggleErrorMessage.style.color = 'red';
            successMessage.style.display = 'none';
        }
    }

    function password1Validator(){
        if(password.value){
            passwordError.style.display = 'none';
        }else{
            successMessage.style.display = 'none';
            passwordError.style.display = 'block';
            toggleErrorMessage.style.color = 'red';
        }
        
    }

    function passwordConfirmValidator(){
        if(passwordConfirm.value){
            if(password.value === passwordConfirm.value){
           
                if(passwordValidator(passwordConfirm.value)){
                    console.log("SUCCESSFULLY CREATED");
                    if(username.value){
                    successMessage.innerText = 'Succesfully Registered!'
                    successMessage.style.display = 'block';
                    toggleErrorMessage.style.display = 'none';
                    }
                    
                }else{
                    successMessage.style.display = 'none';
                    toggleErrorMessage.style.color = 'red';
                    toggleErrorMessage.innerHTML = 'Password must be at least <br>- 8-16 characters long and must contain  &nbsp;&nbsp;of <br> - an UpperCase, <br> - a LowerCase, <br> - a number and <br> - a special character' ;
                   
                    toggleErrorMessage.style.display = 'block';
                    console.log("REQUIREMENTS DOESN'T MATCH");
                }
                
            }else{
                successMessage.style.display = 'none';
                toggleErrorMessage.innerHTML = 'The passwords should match!'
                toggleErrorMessage.style.color = 'red';
                toggleErrorMessage.style.display = 'block';
            }
        }else{
            successMessage.style.display = 'none';
            toggleErrorMessage.innerHTML = 'Re-enter password!';
            toggleErrorMessage.style.color = 'red';
            toggleErrorMessage.style.display = 'block';
        }
      
    }

    userNameValidator();
    password1Validator();
    passwordConfirmValidator();
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
});

//UpperCase,lowerCase,number,SpecialCharacter,8-16 characters
function passwordValidator(password){
  
    let upperCase = false;
    let lowerCase = false;
    let number = false;
    let specialCharacter = false;
//  let passwordLenght = false;
  
    if(password.length>=8 && password.length<=16){
        // validating wheter the password contains the said characters..
        for(var i = 0 ; i<password.length;i++){
            if(!upperCase){
                upperCase = upperCaseChecker(password.charAt(i));
            }
            if(!lowerCase){
                lowerCase = lowerCaseChecker(password.charAt(i));
            }
            if(!number){
                number = numberChecker(password.charAt(i));
            }
            if(!specialCharacter){
                specialCharacter = specialCharacterChecker(password.charAt(i));
            }
                
                
                
               

            if((upperCase && lowerCase) && (number && specialCharacter)){
                break;
            }

        }
        // if the conditions meet then return true, else false;
        if((upperCase && lowerCase) && (number && specialCharacter)){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }




    
function upperCaseChecker(password){
    if(password.charCodeAt(0)>=65 && password.charCodeAt(0)<=90){
        return true;
    }else{
        return false;
    }
   }
function lowerCaseChecker(password){
    if(password.charCodeAt(0)>=97 && password.charCodeAt(0)<=122){
        return true;
    }else{
        return false;
    }
}

function numberChecker(password){
    if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57){
        return true;
    }else{
        return false;
    }
}

function specialCharacterChecker(password){
    if(((password.charCodeAt(0)>=33 && password.charCodeAt(0)<=47) || (password.charCodeAt(0)>=58 && password.charCodeAt(0)<=64) )   ||    ((password.charCodeAt(0)>=91 && password.charCodeAt(0)<=96)||(password.charCodeAt(0)>=123 && password.charCodeAt(0)<=126))){
        return true;
    }else{
        return false;
    }

}
}

togglePassword.addEventListener("click",function(){
    password.type = password.type === 'password'? 'text':'password';
    togglePassword.innerText = togglePassword.innerText === 'Show' ? 'Hide':'Show';
});
togglePasswordConfirm.addEventListener("click",function(){
    passwordConfirm.type = passwordConfirm.type === 'password'? 'text':'password';
    togglePasswordConfirm.innerText = togglePasswordConfirm.innerText === 'Show' ? 'Hide':'Show';
});



