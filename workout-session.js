let seconds = 0;

let timer;

let running = false;



function startTimer(){


    if(running){

        return;

    }


    running = true;



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



    document.getElementById("timer").innerHTML = "00:00";


}
