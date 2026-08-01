// =================================
// NOVAHUB WORKOUT SESSION
// =================================


// GET WORKOUT FROM URL

const params =
new URLSearchParams(window.location.search);


const workout =
params.get("workout") || "pushups";




// WORKOUT DATA

const workouts = {


pushups:{
name:"Push Ups",
difficulty:"🟢 Beginner",
xp:10,
gif:"https://media.giphy.com/media/zcMcG2D8Z4qT6/giphy.gif"
},


squats:{
name:"Squats",
difficulty:"🟢 Beginner",
xp:10,
gif:"https://media.giphy.com/media/aclHk1t8aYq3C/giphy.gif"
},


pullups:{
name:"Pull Ups",
difficulty:"🔴 Advanced",
xp:30,
gif:"https://media.giphy.com/media/5cZ8Rr6rXcL0c/giphy.gif"
},


lunges:{
name:"Lunges",
difficulty:"🟡 Intermediate",
xp:20,
gif:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
},


burpees:{
name:"Burpees",
difficulty:"🔴 Advanced",
xp:30,
gif:"https://media.giphy.com/media/26BRqR8g6J8K9d6rK/giphy.gif"
},


jumping:{
name:"Jumping Jacks",
difficulty:"🟢 Beginner",
xp:10,
gif:"https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif"
},


mountain:{
name:"Mountain Climbers",
difficulty:"🟡 Intermediate",
xp:20,
gif:"https://media.giphy.com/media/1zi2SFsjUwzB0e9iO5/giphy.gif"
}

};





let currentWorkout =
workouts[workout];



if(currentWorkout){


document.getElementById("workoutName").textContent =
currentWorkout.name;


document.getElementById("difficulty").textContent =
currentWorkout.difficulty;


document.getElementById("reward").textContent =
"⭐ +" + currentWorkout.xp + " XP";


document.getElementById("workoutGif").src =
currentWorkout.gif;


}






// TIMER


let seconds = 0;

let timer;

let running=false;




function startWorkout(){


if(running)
return;


running=true;


timer=setInterval(()=>{


seconds++;


let minutes =
Math.floor(seconds/60);


let secs =
seconds%60;



document.getElementById("timer").textContent =

(minutes<10?"0":"")
+minutes
+
":"
+
(secs<10?"0":"")
+secs;



},1000);



}






function pauseWorkout(){


clearInterval(timer);


running=false;


}







function stopWorkout(){


clearInterval(timer);


running=false;


seconds=0;


document.getElementById("timer").textContent="00:00";


}








// COMPLETE WORKOUT


function completeWorkout(){


if(seconds < 10){

alert("Do the workout first 💪");

return;

}





let total =

Number(localStorage.getItem("totalWorkouts"))
||0;


total++;


localStorage.setItem(
"totalWorkouts",
total
);






let points =

Number(localStorage.getItem("points"))
||0;


points += currentWorkout.xp;


localStorage.setItem(
"points",
points
);






let today =
new Date().toDateString();


localStorage.setItem(
"dailyGoalCompleted",
today
);






alert(

"Workout Completed! 🔥\n+"
+
currentWorkout.xp
+
" XP"

);



window.location.href="dashboard.html";


}
