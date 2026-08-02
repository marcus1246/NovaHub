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
// =================================
// NOVAHUB COMPLETE WORKOUT
// PART 3
// =================================


// XP VALUES
const workoutXP = {

    pushups:10,
    squats:10,
    lunges:20,
    pullups:30,
    burpees:30,
    jumping:10

};




function completeWorkout(){

    // Must actually do the workout
    if(seconds < 10){

        alert("⏱ Complete at least 10 seconds before finishing!");

        return;

    }



    // Stop timer
    clearInterval(timer);

    running = false;



    // XP
    let xp =
    Number(localStorage.getItem("points")) || 0;

    xp += workoutXP[workout] || 10;

    localStorage.setItem("points", xp);




    // Total workouts
    let total =
    Number(localStorage.getItem("totalWorkouts")) || 0;

    total++;

    localStorage.setItem("totalWorkouts", total);




    // Daily goal
    let daily =
    Number(localStorage.getItem("dailyWorkouts")) || 0;

    daily++;

    localStorage.setItem("dailyWorkouts", daily);




    // Workout History
    let history =

    JSON.parse(

    localStorage.getItem("workoutHistory")

    )

    ||

    [];



    history.unshift({

        workout: exercise.name,

        xp: workoutXP[workout] || 10,

        duration: getWorkoutDuration(),

        date: new Date().toLocaleString()

    });



    // Keep only latest 20
    history = history.slice(0,20);

    localStorage.setItem(

        "workoutHistory",

        JSON.stringify(history)

    );




    // Weekly Activity
    let weekly =

    JSON.parse(

    localStorage.getItem("weeklyWorkouts")

    )

    ||

    [0,0,0,0,0,0,0];



    let today = new Date().getDay();

    let index = today === 0 ? 6 : today - 1;

    weekly[index]++;

    localStorage.setItem(

        "weeklyWorkouts",

        JSON.stringify(weekly)

    );



  celebrate();

setTimeout(function(){

    alert(
        "🏆 Workout Complete!\n\n+" +
        (workoutXP[workout] || 10) +
        " XP"
    );

    window.location.href="dashboard.html";

},600);
}
