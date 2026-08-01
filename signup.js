function signup() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if(username === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }


    let user = {
        username: username,
        email: email,
        password: password
    };


    localStorage.setItem("user", JSON.stringify(user));


    alert("Account created successfully!");

    window.location.href = "login.html";
}
