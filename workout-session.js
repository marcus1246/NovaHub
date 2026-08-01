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

    running = false;

}






function stopTimer(){

    clearInterval(timer);

    seconds = 0;

    running = false;


    document.getElementById("timer").innerHTML="00:00";

}






function completeWorkout(){


    if(!hasWorkedOut){

        alert("You need to start the workout first 💪");

        return;

    }



    let total = localStorage.getItem("totalWorkouts");



    if(total === null){

        total = 0;

    }



    total++;



    localStorage.setItem(
        "totalWorkouts",
        total
    );



    alert("Workout Completed! 🏆🔥");



    window.location.href="dashboard.html";


}
