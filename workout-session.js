let seconds = 0;

let timer;

let running = false;

let hasWorkedOut = false;



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

        (minutes < 10 ? "0" + minutes : minutes)
        +
        ":"
        +
        (secs < 10 ? "0" + secs : secs);



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



    // TOTAL WORKOUTS

    let total = Number(localStorage.getItem("totalWorkouts")) || 0;

    total++;


    localStorage.setItem(
        "totalWorkouts",
        total
    );





    // STREAK SYSTEM


    let today = new Date();


    let todayDate = today.toDateString();



    let lastWorkout = localStorage.getItem("lastWorkoutDate");



    let streak = Number(localStorage.getItem("streak")) || 0;



    if(lastWorkout){


        let lastDate = new Date(lastWorkout);


        let difference =
        today - lastDate;



        let days =
        Math.floor(
        difference / (1000*60*60*24)
        );



        if(days === 1){

            streak++;

        }


        else if(days > 1){

            streak = 1;

        }



    }else{


        streak = 1;


    }




    localStorage.setItem(
        "streak",
        streak
    );



    localStorage.setItem(
        "lastWorkoutDate",
        todayDate
    );



    alert("Workout Completed! 🔥 Streak: " + streak + " days");



    window.location.href="dashboard.html";


}
