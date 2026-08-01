// =====================================
// NOVAHUB DASHBOARD JS
// =====================================


// LOGIN CHECK

let username = localStorage.getItem("loggedInUser");


if(!username){

    window.location.href="login.html";

}



// USERNAME

document.getElementById("username").textContent = username;



// DATE

let date = new Date();


document.getElementById("currentDate").textContent =
date.toDateString();




// DATA

let workouts =
Number(localStorage.getItem("totalWorkouts")) || 0;


let streak =
Number(localStorage.getItem("streak")) || 0;


let points =
Number(localStorage.getItem("points")) || 0;




// STATS

document.getElementById("workoutCount").textContent =
workouts;


document.getElementById("streakCount").textContent =
streak;


document.getElementById("points").textContent =
points;





// =================
// LEVEL SYSTEM
// =================


let level =
Math.floor(points / 100) + 1;


let xp =
points % 100;



document.getElementById("levelText").textContent =
"Level " + level + " • " + xp + "/100 XP";



setTimeout(()=>{


document.getElementById("xpBar").style.width =
xp + "%";


},300);






// =================
// DAILY GOAL
// =================


let today =
new Date().toDateString();


let completed =
localStorage.getItem("dailyGoalCompleted");



let goal = 0;



if(completed === today){

goal = 1;

}



document.getElementById("dailyGoal").textContent =
goal + " / 2 Workouts";


document.getElementById("goalText").textContent =
goal + " of 2 workouts completed";



document.getElementById("goalBar").style.width =
(goal / 2 * 100) + "%";







// =================
// MOTIVATION
// =================


let quotes=[

"🔥 Keep pushing forward",

"💪 Stronger every day",

"🏆 Discipline creates results",

"⚡ Never skip your goals"

];



let quote =
quotes[Math.floor(Math.random()*quotes.length)];



document.getElementById("quote").textContent =
quote;


document.getElementById("motivation").textContent =
quote;








// =================
// RECENT ACTIVITY
// =================


let activity =
document.getElementById("recentActivity");



if(workouts > 0){


activity.innerHTML = `

<p>🔥 Latest workout completed</p>

<p>🏆 ${workouts} Total Workouts</p>

<p>⭐ ${points} XP Earned</p>

`;



}






// =================
// ACHIEVEMENTS
// =================


function unlock(id){

let badge =
document.getElementById(id);


if(badge){

badge.classList.remove("locked");

badge.classList.add("unlocked");

}

}



if(workouts >= 1)
unlock("badge1");


if(workouts >= 10)
unlock("badge2");


if(workouts >= 50)
unlock("badge3");


if(streak >= 7)
unlock("badge4");


if(points >= 500)
unlock("badge5");


if(level >= 10)
unlock("badge6");







// =================
// NEXT GOAL
// =================


let next =
document.getElementById("nextGoal");



if(workouts < 1){

next.textContent =
"Complete your first workout 🏋️";

}

else if(workouts < 10){

next.textContent =
`${10-workouts} workouts until 10 Workout Badge`;

}

else if(points < 500){

next.textContent =
`${500-points} XP until XP Master ⭐`;

}

else{

next.textContent =
"🎉 All goals completed";

}








// =================
// CHART
// =================


let canvas =
document.getElementById("weeklyChart");



if(canvas){


let data =

JSON.parse(localStorage.getItem("weeklyWorkouts"))

||

[0,0,0,0,0,0,0];



new Chart(canvas,{

type:"bar",


data:{


labels:[

"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"

],


datasets:[{

label:"Workouts",

data:data,

backgroundColor:"#00ff88",

borderRadius:10

}]

},



options:{


responsive:true,


animation:{

duration:1000

},


plugins:{


legend:{

display:false

}


}


}



});

}






// =================
// LOGOUT
// =================


function logout(){

localStorage.removeItem("loggedInUser");

window.location.href="login.html";

}
