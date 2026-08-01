// =================================
// NOVAHUB PROFILE SYSTEM
// =================================



let username =

localStorage.getItem("loggedInUser")

||

"User";





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







// DISPLAY USER


document.getElementById("profileName").textContent =

username;





// DISPLAY STATS


document.getElementById("profileWorkouts").textContent =

workouts;





document.getElementById("profileXP").textContent =

xp;





document.getElementById("profileLevel").textContent =

Math.floor(xp / 100) + 1;





document.getElementById("profileStreak").textContent =

streak + " Days";







// LOGOUT


function logout(){


localStorage.removeItem("loggedInUser");


window.location.href="login.html";


}
