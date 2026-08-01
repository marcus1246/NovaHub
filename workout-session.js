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

        let remainingSeconds = seconds % 60;



        document.getElementById("timer").innerHTML =

        (minutes < 10 ? "0" + minutes : minutes)
        +
        ":"
        +
        (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);



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

        alert("Start your workout first! 💪");

        return;

    }



    alert("Workout completed! 🏆🔥");


    localStorage.setItem(
        "lastWorkout",
        "completed"
    );


}
