// =================================
// NOVAHUB DASHBOARD SYSTEM
// =================================



document.addEventListener("DOMContentLoaded", function(){



// USERNAME

let username =

localStorage.getItem("loggedInUser")

||

"User";



let usernameBox = 
document.getElementById("username");


if(usernameBox){

usernameBox.textContent = username;

}







// DATE

let dateBox =
document.getElementById("currentDate");


if(dateBox){

dateBox.textContent =
new Date().toDateString();

}







// STATS


let workouts =

Number(localStorage.getItem("totalWorkouts"))

||

0;



let xp =

Number(localStorage.getItem("points"))

||

0;



let streak =

Number(localStorage.getItem("streak"))

||

0;





if(document.getElementById("workoutCount")){

document.getElementById("workoutCount").textContent =
workouts;

}



if(document.getElementById("points")){

document.getElementById("points").textContent =
xp;

}



if(document.getElementById("streakCount")){

document.getElementById("streakCount").textContent =
streak;

}








// LEVEL BAR


let level =

Math.floor(xp / 100)+1;



let levelXP =

xp % 100;




let levelText =
document.getElementById("levelText");



let xpBar =
document.getElementById("xpBar");




if(levelText){

levelText.textContent =

"Level "
+
level
+
" • "
+
levelXP
+
"/100 XP";

}



if(xpBar){

xpBar.style.width =
levelXP + "%";

}








// ===============================
// WEEKLY ACTIVITY CHART
// ===============================



let canvas =

document.getElementById("weeklyChart");



if(canvas && typeof Chart !== "undefined"){



let weekly =

JSON.parse(

localStorage.getItem("weeklyWorkouts")

)

||

[0,0,0,0,0,0,0];






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



data:weekly,



backgroundColor:"#00ff88"



}]


},





options:{



responsive:true,



maintainAspectRatio:false,



plugins:{



legend:{


display:false


}



},




scales:{



y:{


beginAtZero:true


}



}



}



});



}



});








// LOGOUT


function logout(){


localStorage.removeItem("loggedInUser");


window.location.href="login.html";


}
