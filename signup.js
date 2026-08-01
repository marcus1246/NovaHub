// =================================
// NOVAHUB SIGNUP SYSTEM
// =================================



function signup(){



let username =

document.getElementById("username").value;



let email =

document.getElementById("email").value;



let password =

document.getElementById("password").value;



let gender =

document.getElementById("gender").value;






if(
username === "" ||
email === "" ||
password === ""
){


alert("Fill in all fields");


return;


}






localStorage.setItem(
"loggedInUser",
username
);




localStorage.setItem(
"userEmail",
email
);



localStorage.setItem(
"userGender",
gender
);




localStorage.setItem(
"password",
password
);







alert("Account Created 🔥");



window.location.href="dashboard.html";



}
