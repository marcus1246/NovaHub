let user = localStorage.getItem("loggedInUser");


if(!user){

    window.location.href="login.html";

}



document.getElementById("username").innerHTML = user;




let workouts =
localStorage.getItem("totalWorkouts") || 0;


document.getElementById("workoutCount").innerHTML = workouts;





let streak =
localStorage.getItem("streak") || 0;


document.getElementById("streakCount").innerHTML = streak;







function logout(){


localStorage.removeItem("loggedInUser");


window.location.href="login.html";


}
