//ERROR MESSAGES:-
function reEnterPassword(errElement){errElement.innerHTML='Re-enter password!';}
function passwordShouldMatch(errElement){errElement.innerHTML='The passwords should match!';}
function thisFieldIsMandatory(errElement){errElement.innerHTML='This field is mandatory.'}
function passwordDoesntMeetTheRequirements(errElement){errElement.innerHTML='Password must be at least <br>- 8-16 characters long and must contain  &nbsp;&nbsp;of <br> - an UpperCase, <br> - a LowerCase, <br> - a number and <br> - a special character';}
function userNameAlreadyExists(errElement){errElement.innerHTML='Username Already Taken!!';}

//SUCCESS MESSAGES:-
function successMsg(succElement){succElement.innerHTML='Succesfully Registered!'}


 const valMsg = 
{
    reEnterPassword,
    passwordShouldMatch,
    thisFieldIsMandatory,
    passwordDoesntMeetTheRequirements,
    userNameAlreadyExists,
    successMsg
}

export default valMsg;