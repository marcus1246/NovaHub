let user = localStorage.getItem("loggedInUser");



if(!user){

    window.location.href="login.html";

}




document.getElementById("username").innerHTML = user;




let workouts = localStorage.getItem("totalWorkouts");



if(workouts === null){

    workouts = 0;

}



document.getElementById("workoutCount").innerHTML = workouts;





function logout(){


    localStorage.removeItem("loggedInUser");


    window.location.href="login.html";


}
