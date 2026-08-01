// ==============================
// NOVAHUB DASHBOARD
// ==============================


let username =
localStorage.getItem("loggedInUser")
||
"User";


document.getElementById("username").textContent =
username;




document.getElementById("currentDate").textContent =
new Date().toDateString();






let workouts =
Number(localStorage.getItem("totalWorkouts"))
||0;


let points =
Number(localStorage.getItem("points"))
||0;


let streak =
Number(localStorage.getItem("streak"))
||0;





document.getElementById("workoutCount").textContent =
workouts;


document.getElementById("points").textContent =
points;


document.getElementById("streakCount").textContent =
streak;







// LEVEL


let level =
Math.floor(points / 100)+1;


let xp =
points % 100;



document.getElementById("levelText").textContent =

"Level "
+
level
+
" • "
+
xp
+
"/100 XP";



document.getElementById("xpBar").style.width =
xp+"%";








// CHART


let canvas =
document.getElementById("weeklyChart");


let loading =
document.getElementById("chartLoading");



if(canvas){


let chartData =

JSON.parse(
localStorage.getItem("weeklyWorkouts")
)

||

[0,0,0,0,0,0,0];



if(loading){

loading.style.display="none";

}



new Chart(canvas,{


type:"bar",


data:{


labels:[

"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"

],



datasets:[{


label:"Workouts",

data:chartData,


backgroundColor:"#00ff88"



}]


},


options:{


responsive:true,


animation:{


duration:1000


},


plugins:{


legend:{


display:false


}


}



}



});



}







function logout(){


localStorage.removeItem("loggedInUser");


window.location.href="login.html";


}
