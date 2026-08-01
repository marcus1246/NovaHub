let user =
localStorage.getItem("loggedInUser");



if(!user){

window.location.href="login.html";

}





document.getElementById("username").innerHTML=user;






let workouts =
Number(localStorage.getItem("totalWorkouts")) || 0;


let streak =
Number(localStorage.getItem("streak")) || 0;


let points =
Number(localStorage.getItem("points")) || 0;





document.getElementById("workoutCount").innerHTML=workouts;


document.getElementById("streakCount").innerHTML=streak;


document.getElementById("points").innerHTML=points;







// DAILY GOAL


let today =
new Date().toDateString();



if(localStorage.getItem("dailyGoalCompleted") === today){


document.getElementById("dailyGoal").innerHTML=
"✅ Completed";


}else{


document.getElementById("dailyGoal").innerHTML=
"⏳ Not Completed";


}








// XP BAR


let xp =
points % 100;



document.getElementById("xpBar").style.width =
xp + "%";



document.getElementById("levelText").innerHTML =
"Level " + (Math.floor(points/100)+1);








// ACTIVITY


if(workouts > 0){


document.getElementById("activity").innerHTML =
"🔥 Completed " + workouts + " workouts";


}









// ACHIEVEMENTS


let badges=[];



if(workouts>=1){

badges.push("🥉 First Workout");

}



if(workouts>=10){

badges.push("🥈 10 Workouts");

}



if(points>=500){

badges.push("⭐ XP Master");

}



if(streak>=7){

badges.push("🔥 7 Day Streak");

}




if(badges.length){

document.getElementById("badges").innerHTML =
badges.join("<br>");

}








function logout(){


localStorage.removeItem("loggedInUser");


window.location.href="login.html";


}
