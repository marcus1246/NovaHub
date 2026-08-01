let user = localStorage.getItem("loggedInUser");


if (!user) {

    window.location.href = "login.html";

}


document.getElementById("username").innerHTML = user;



function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "login.html";

}
