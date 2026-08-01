function login(){


let email = document.getElementById("email").value;

let password = document.getElementById("password").value;



let savedUser = JSON.parse(
localStorage.getItem("user")
);



if(!savedUser){


alert("No account found. Please sign up first.");

return;


}




if(
email === savedUser.email &&
password === savedUser.password
){


localStorage.setItem(
"loggedInUser",
savedUser.username
);



alert("Login successful!");



window.location.href="dashboard.html";



}else{


alert("Incorrect email or password");


}



}
