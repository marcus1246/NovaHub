let seconds = 0;

let timer;

let running = false;

let hasWorkedOut = false;



let workoutPoints = 10; // default points





function startTimer(){


    if(running){
        return;
    }


    running = true;

    hasWorkedOut = true;


    document.getElementById("completeBtn").disabled = false;

    document.getElementById("completeBtn").innerHTML =
    "Complete Workout 🏆";



    timer = setInterval(function(){


        seconds++;


        let minutes = Math.floor(seconds / 60);

        let secs = seconds % 60;



        document.getElementById("timer").innerHTML =

        (minutes < 10 ? "0"+minutes : minutes)
        +
        ":"
        +
        (secs < 10 ? "0"+secs : secs);



    },1000);


}






function pauseTimer(){

    clearInterval(timer);

    running=false;

}






function stopTimer(){

    clearInterval(timer);

    seconds=0;

    running=false;


    document.getElementById("timer").innerHTML="00:00";

}







function completeWorkout(){


    if(!hasWorkedOut){

        alert("Start the workout first 💪");

        return;

    }




// WORKOUT COUNT

let workouts =
Number(localStorage.getItem("totalWorkouts")) || 0;


workouts++;


localStorage.setItem(
"totalWorkouts",
workouts
);







// POINT SYSTEM


let points =
Number(localStorage.getItem("points")) || 0;


points += workoutPoints;



localStorage.setItem(
"points",
points
);







// DAILY GOAL

let today =
new Date().toDateString();


localStorage.setItem(
"dailyGoalCompleted",
today
);





alert(
"Workout Completed! 🏆 +" 
+ workoutPoints +
" Points"
);




window.location.href="dashboard.html";


}
