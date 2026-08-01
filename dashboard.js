let user = localStorage.getItem("loggedInUser");



if(!user){

    window.location.href = "login.html";

}





document.getElementById("username").innerHTML = user;





// TOTAL WORKOUTS

let workouts = localStorage.getItem("totalWorkouts");


if(workouts === null){

    workouts = 0;

}



document.getElementById("workoutCount").innerHTML = workouts;







// STREAK

let streak = localStorage.getItem("streak");


if(streak === null){

    streak = 0;

}



document.getElementById("streakCount").innerHTML = streak;








// DAILY GOAL


let today = new Date().toDateString();



let completed =
localStorage.getItem("dailyGoalCompleted");



if(completed === today){


    document.getElementById("dailyGoal").innerHTML =
    "✅ Completed";


}else{


    document.getElementById("dailyGoal").innerHTML =
    "⏳ Not Completed";


}







// LOGOUT


function logout(){


    localStorage.removeItem("loggedInUser");


    window.location.href="login.html";


}
