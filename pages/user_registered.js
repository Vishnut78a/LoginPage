var userRegisteredMessage = document.getElementById('userRegisteredMessage');

var params = new URLSearchParams(window.location.search);
console.log(params);
var username = params.get('userName');
console.log(username);


function welcomeUser(){
    userRegisteredMessage.innerHTML = `Welcome ${username}!,
    <br>You have been registered Successfully;`
}

welcomeUser();