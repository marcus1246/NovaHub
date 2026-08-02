// =================================
// NOVAHUB WORKOUT SESSION SYSTEM
// =================================



let seconds = 0;

let timer = null;

let running = false;






function startWorkout(){


if(running){

return;

}


running = true;



timer = setInterval(function(){


seconds++;



let minutes =
Math.floor(seconds / 60);



let secs =
seconds % 60;



document.getElementById("timer").textContent =

(minutes < 10 ? "0" : "")
+
minutes
+
":"
+
(secs < 10 ? "0" : "")
+
secs;



},1000);



}







function pauseWorkout(){


clearInterval(timer);


running = false;



}







function stopWorkout(){


clearInterval(timer);


running = false;


seconds = 0;



document.getElementById("timer").textContent =
"00:00";



}








function completeWorkout(){



if(seconds < 10){


alert("Complete at least 10 seconds first 💪");


return;


}




let total =

Number(localStorage.getItem("totalWorkouts"))
||
0;



localStorage.setItem(

"totalWorkouts",

total + 1

);






let points =

Number(localStorage.getItem("points"))
||
0;



points += 10;



localStorage.setItem(

"points",

points

);





alert("Workout Completed! 🔥 +10 XP");



window.location.href="dashboard.html";



}
// =================================
// NOVAHUB TIMER SYSTEM
// PART 2
// =================================

let seconds = 0;
let timer = null;
let running = false;


// Update Timer Display
function updateTimer(){

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    document.getElementById("timer").textContent =
        String(mins).padStart(2,"0") +
        ":" +
        String(secs).padStart(2,"0");

}


// START WORKOUT
function startWorkout(){

    if(running){
        return;
    }

    running = true;

    timer = setInterval(function(){

        seconds++;

        updateTimer();

    },1000);

}



// PAUSE WORKOUT
function pauseWorkout(){

    if(!running){
        return;
    }

    clearInterval(timer);

    running = false;

}



// STOP WORKOUT
function stopWorkout(){

    clearInterval(timer);

    running = false;

    seconds = 0;

    updateTimer();

}



// Workout Duration
function getWorkoutDuration(){

    let mins = Math.floor(seconds/60);
    let secs = seconds%60;

    return mins + " min " + secs + " sec";

}



// Show current duration while working out
setInterval(function(){

    let duration =
    document.getElementById("workoutDuration");

    if(duration){

        duration.textContent =
        getWorkoutDuration();

    }

},500);



// Initialize timer
updateTimer();
