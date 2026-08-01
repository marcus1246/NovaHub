// ==============================
// NOVAHUB DASHBOARD - PART 1
// ==============================

// ---------- LOGIN CHECK ----------

let user = localStorage.getItem("loggedInUser");

if (!user) {
    window.location.href = "login.html";
}

// ---------- USERNAME ----------

document.getElementById("username").textContent = user;


// ---------- USER DATA ----------

let workouts = Number(localStorage.getItem("totalWorkouts")) || 0;
let streak = Number(localStorage.getItem("streak")) || 0;
let points = Number(localStorage.getItem("points")) || 0;


// ---------- UPDATE STATS ----------

document.getElementById("workoutCount").textContent = workouts;
document.getElementById("streakCount").textContent = streak;
document.getElementById("points").textContent = points;


// ---------- XP SYSTEM ----------

let level = Math.floor(points / 100) + 1;
let currentXP = points % 100;
let xpPercent = currentXP;

document.getElementById("levelText").textContent =
    "Level " + level + " • " + currentXP + " / 100 XP";


// Animate XP bar
setTimeout(function () {
    document.getElementById("xpBar").style.width = xpPercent + "%";
}, 300);


// ---------- DAILY GOAL ----------

// Goal = 2 workouts each day

let today = new Date().toDateString();

let completedToday =
    localStorage.getItem("dailyGoalCompleted") === today;

let goalCount = completedToday ? 1 : 0;

document.getElementById("dailyGoal").textContent =
    goalCount + " / 2 Workouts";

document.getElementById("goalText").textContent =
    goalCount + " of 2 workouts completed today";

let goalPercent = (goalCount / 2) * 100;

setTimeout(function () {
    document.getElementById("goalBar").style.width =
        goalPercent + "%";
}, 500);
// ==============================
// NOVAHUB DASHBOARD - PART 2
// ==============================


// ---------- MOTIVATIONAL QUOTES ----------

const quotes = [

    "💪 Success starts with showing up.",

    "🔥 Push yourself because no one else will.",

    "🏆 Small progress is still progress.",

    "⚡ Discipline beats motivation.",

    "🚀 Become stronger than yesterday.",

    "❤️ Every workout counts."

];

let randomQuote =
quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").textContent =
randomQuote;

document.getElementById("motivation").textContent =
randomQuote;


// ---------- RECENT ACTIVITY ----------

let activity = document.getElementById("recentActivity");

if(workouts === 0){

activity.innerHTML = `
<p>🏋️ No workouts completed yet.</p>
<p>Start your first workout today!</p>
`;

}else{

activity.innerHTML = `
<p>✅ Last workout completed successfully.</p>
<p>🏆 Total Workouts: ${workouts}</p>
<p>⭐ Total XP: ${points}</p>
`;

}



// ---------- ACHIEVEMENTS ----------

if(workouts >= 1){

document.getElementById("badge1").classList.remove("locked");
document.getElementById("badge1").classList.add("unlocked");

}

if(workouts >= 10){

document.getElementById("badge2").classList.remove("locked");
document.getElementById("badge2").classList.add("unlocked");

}

if(workouts >= 50){

document.getElementById("badge3").classList.remove("locked");
document.getElementById("badge3").classList.add("unlocked");

}

if(streak >= 7){

document.getElementById("badge4").classList.remove("locked");
document.getElementById("badge4").classList.add("unlocked");

}

if(points >= 500){

document.getElementById("badge5").classList.remove("locked");
document.getElementById("badge5").classList.add("unlocked");

}

if(level >= 10){

document.getElementById("badge6").classList.remove("locked");
document.getElementById("badge6").classList.add("unlocked");

}



// ---------- NEXT GOAL ----------

let nextGoal = document.getElementById("nextGoal");

if(workouts < 1){

nextGoal.textContent =
"Complete your first workout to unlock 🥉 First Workout.";

}
else if(workouts < 10){

nextGoal.textContent =
"Complete " + (10 - workouts) + " more workouts to unlock 🥈 10 Workouts.";

}
else if(workouts < 50){

nextGoal.textContent =
"Complete " + (50 - workouts) + " more workouts to unlock 🥇 50 Workouts.";

}
else if(streak < 7){

nextGoal.textContent =
"Keep your streak going! " + (7 - streak) + " more days to unlock 🔥 7 Day Streak.";

}
else if(points < 500){

nextGoal.textContent =
"Earn " + (500 - points) + " more XP to unlock ⭐ XP Master.";

}
else{

nextGoal.textContent =
"🎉 Amazing! You've unlocked all current achievements!";

}



// ---------- LOGOUT ----------

function logout(){

localStorage.removeItem("loggedInUser");

window.location.href = "login.html";

}
