let workouts =
Number(localStorage.getItem("totalWorkouts")) || 0;


let streak =
Number(localStorage.getItem("streak")) || 0;



document.getElementById("progressWorkouts").innerHTML =
workouts;



document.getElementById("progressStreak").innerHTML =
streak + " Days";





let level = "Beginner";


if(workouts >= 10){

    level = "Intermediate 💪";

}


if(workouts >= 50){

    level = "Advanced 🔥";

}


if(workouts >= 100){

    level = "Fitness Legend 🏆";

}



document.getElementById("level").innerHTML =
level;
