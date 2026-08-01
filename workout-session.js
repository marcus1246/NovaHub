// =====================================
// NOVAHUB WORKOUT SESSION JS
// =====================================


// TIMER

let seconds = 0;

let timer = null;

let running = false;





// GET WORKOUT

let params =
new URLSearchParams(window.location.search);


let workout =
params.get("workout") || "Workout";





// XP VALUES

let workoutXP = {


pushups:10,

squats:10,

glute:10,

yoga:10,


lunges:20,

mountain:20,


pullups:30,

burpees:30,

jumping:10


};





let earnedXP =
workoutXP[workout] || 10;







// TIMER START

function startWorkout(){


if(running)
return;



running=true;



timer=setInterval(()=>{


seconds++;


let min =
Math.floor(seconds/60);


let sec =
seconds%60;



document.getElementById("timer").textContent =

(min<10?"0":"")
+
min
+
":"
+
(sec<10?"0":"")
+
sec;



},1000);



}







// PAUSE

function pauseWorkout(){


clearInterval(timer);


running=false;


}







// STOP

function stopWorkout(){


clearInterval(timer);


seconds=0;


running=false;


document.getElementById("timer").textContent="00:00";


}







// COMPLETE

function completeWorkout(){



if(seconds < 10){


alert("Complete some workout time first 💪");


return;


}




// TOTAL WORKOUTS


let total =

Number(localStorage.getItem("totalWorkouts"))
||
0;



total++;


localStorage.setItem(
"totalWorkouts",
total
);







// XP


let points =

Number(localStorage.getItem("points"))
||
0;



points += earnedXP;



localStorage.setItem(
"points",
points
);








// DAILY GOAL


localStorage.setItem(

"dailyGoalCompleted",

new Date().toDateString()

);








// WEEKLY CHART


let weekly =

JSON.parse(
localStorage.getItem("weeklyWorkouts")
)

||

[0,0,0,0,0,0,0];




let day =
new Date().getDay();



let index =
day === 0 ? 6 : day-1;



weekly[index]++;



localStorage.setItem(

"weeklyWorkouts",

JSON.stringify(weekly)

);








// STREAK


let streak =

Number(localStorage.getItem("streak"))
||
0;



streak++;



localStorage.setItem(

"streak",

streak

);







alert(

"Workout Complete! 🔥\n+"

+
earnedXP
+
" XP"

);






window.location.href="dashboard.html";

}
