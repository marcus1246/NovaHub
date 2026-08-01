// =================================
// NOVAHUB PROGRESS SYSTEM
// =================================



let workouts =

Number(localStorage.getItem("totalWorkouts"))
||0;



let xp =

Number(localStorage.getItem("points"))
||0;



let streak =

Number(localStorage.getItem("streak"))
||0;





document.getElementById("progressWorkouts").textContent =
workouts;



document.getElementById("progressXP").textContent =
xp;



document.getElementById("progressLevel").textContent =

Math.floor(xp / 100) + 1;



document.getElementById("bestStreak").textContent =

streak + " Days";








// CHART


let canvas =
document.getElementById("progressChart");



if(canvas){



let data =

JSON.parse(

localStorage.getItem("weeklyWorkouts")

)

||

[0,0,0,0,0,0,0];






new Chart(canvas,{


type:"line",


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


data:data,


borderColor:"#00ff88",


tension:.4


}]


},


options:{


responsive:true


}



});



}







function logout(){


localStorage.removeItem("loggedInUser");


window.location.href="login.html";


}
