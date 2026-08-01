let seconds = 0;
let timer;
let running = false;


function startTimer(){

if(running) return;

running = true;


timer = setInterval(function(){

seconds++;


let mins = Math.floor(seconds / 60);

let secs = seconds % 60;


document.getElementById("timer").innerHTML =

(mins < 10 ? "0" + mins : mins)
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
