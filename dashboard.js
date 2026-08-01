// =====================================
// NOVAHUB DASHBOARD V3
// PART 1
// =====================================


// ---------- LOGIN ----------

const username = localStorage.getItem("loggedInUser");

if (!username) {
    window.location.href = "login.html";
}


// ---------- USERNAME ----------

document.getElementById("username").textContent = username;


// ---------- DATE ----------

const today = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("currentDate").textContent =
today.toLocaleDateString("en-US", options);


// ---------- LOAD DATA ----------

const workouts =
Number(localStorage.getItem("totalWorkouts")) || 0;

const streak =
Number(localStorage.getItem("streak")) || 0;

const points =
Number(localStorage.getItem("points")) || 0;


// ---------- UPDATE STATS ----------

document.getElementById("workoutCount").textContent =
workouts;

document.getElementById("streakCount").textContent =
streak;

document.getElementById("points").textContent =
points;


// ---------- LEVEL SYSTEM ----------

const level = Math.floor(points / 100) + 1;

const currentXP = points % 100;

document.getElementById("levelText").textContent =
`Level ${level} • ${currentXP}/100 XP`;


// ---------- XP BAR ----------

setTimeout(() => {

document.getElementById("xpBar").style.width =
currentXP + "%";

},300);


// ---------- DAILY GOAL ----------

const goalDone =
localStorage.getItem("dailyGoalCompleted");

let goalProgress = 0;

if(goalDone === today.toDateString()){

goalProgress = 1;

}

document.getElementById("dailyGoal").textContent =
goalProgress + " / 2 Workouts";

document.getElementById("goalText").textContent =
goalProgress + " of 2 workouts completed today";

setTimeout(()=>{

document.getElementById("goalBar").style.width =
(goalProgress/2)*100 + "%";

},500);


// ---------- WEEKLY CHART ----------

const chart = document.getElementById("weeklyChart");

new Chart(chart,{

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

data:[2,1,3,0,4,2,1],

backgroundColor:"#00ff88",

borderRadius:12

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

},

scales:{

y:{

beginAtZero:true,

ticks:{

stepSize:1

}

}

}

}

});
// =====================================
// NOVAHUB DASHBOARD V3
// PART 2
// =====================================


// ---------- MOTIVATIONAL QUOTES ----------

const quotes = [

"💪 Every workout makes you stronger.",

"🔥 Push yourself because no one else can do it for you.",

"🏆 Consistency beats perfection.",

"⚡ Train today. Dominate tomorrow.",

"❤️ Success starts with showing up.",

"🚀 Small progress is still progress."

];

const randomQuote =
quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").textContent =
randomQuote;

document.getElementById("motivation").textContent =
randomQuote;



// ---------- RECENT ACTIVITY ----------

const activity =
document.getElementById("recentActivity");

if(workouts === 0){

activity.innerHTML = `
<p>🏋️ No workouts completed yet.</p>
<p>Complete your first workout to begin your journey.</p>
`;

}else{

activity.innerHTML = `
<p>✅ Last workout completed!</p>
<p>🏆 Total Workouts: ${workouts}</p>
<p>⭐ Total XP: ${points}</p>
<p>🔥 Current Streak: ${streak} day(s)</p>
`;

}



// ---------- ACHIEVEMENTS ----------

function unlockBadge(id){

const badge =
document.getElementById(id);

badge.classList.remove("locked");

badge.classList.add("unlocked");

}

if(workouts >= 1){

unlockBadge("badge1");

}

if(workouts >= 10){

unlockBadge("badge2");

}

if(workouts >= 50){

unlockBadge("badge3");

}

if(streak >= 7){

unlockBadge("badge4");

}

if(points >= 500){

unlockBadge("badge5");

}

if(level >= 10){

unlockBadge("badge6");

}



// ---------- NEXT GOAL ----------

const nextGoal =
document.getElementById("nextGoal");

if(workouts < 1){

nextGoal.textContent =
"🏋️ Complete your first workout.";

}
else if(workouts < 10){

nextGoal.textContent =
`🏆 ${10-workouts} more workout(s) until the 10 Workout badge.`;

}
else if(workouts < 50){

nextGoal.textContent =
`🥇 ${50-workouts} more workout(s) until Fitness Master.`;

}
else if(streak < 7){

nextGoal.textContent =
`🔥 ${7-streak} more day(s) until the 7 Day Streak badge.`;

}
else if(points < 500){

nextGoal.textContent =
`⭐ Earn ${500-points} more XP to unlock XP Master.`;

}
else{

nextGoal.textContent =
"🎉 You've unlocked every current achievement!";

}



// ---------- FOOTER YEAR ----------

const footer =
document.querySelector(".dashboard-footer p");

if(footer){

footer.innerHTML =
`NovaHub © ${new Date().getFullYear()}`;

}



// ---------- LOGOUT ----------

function logout(){

localStorage.removeItem("loggedInUser");

window.location.href = "login.html";

}
