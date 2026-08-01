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
