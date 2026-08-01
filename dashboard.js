let user = localStorage.getItem("loggedInUser");



if(!user){

    window.location.href="login.html";

}





document.getElementById("username").innerHTML = user;







// WORKOUTS

let workouts =
localStorage.getItem("totalWorkouts") || 0;


document.getElementById("workoutCount").innerHTML =
workouts;







// STREAK

let streak =
localStorage.getItem("streak") || 0;


document.getElementById("streakCount").innerHTML =
streak;







// POINTS

let points =
localStorage.getItem("points") || 0;


document.getElementById("points").innerHTML =
points;







// DAILY GOAL

let today =
new Date().toDateString();



let completed =
localStorage.getItem("dailyGoalCompleted");



if(completed === today){


document.getElementById("dailyGoal").innerHTML =
"✅ Completed";


}else{


document.getElementById("dailyGoal").innerHTML =
"⏳ Not Completed";


}







// ACHIEVEMENTS

let badges = [];



if(workouts >= 1){

badges.push("🥉 First Workout");

}



if(workouts >= 10){

badges.push("🥈 10 Workouts");

}



if(points >= 500){

badges.push("⭐ 500 XP Master");

}



if(streak >= 7){

badges.push("🔥 7 Day Streak");

}




if(badges.length > 0){

document.getElementById("badges").innerHTML =
badges.join("<br>");

}







// LOGOUT


function logout(){


localStorage.removeItem("loggedInUser");


window.location.href="login.html";


}
