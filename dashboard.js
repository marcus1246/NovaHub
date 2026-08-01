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
