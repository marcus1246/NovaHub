// =================================
// NOVAHUB WORKOUT FILTER SYSTEM
// =================================



const searchInput =
document.getElementById("searchWorkout");


const workoutCards =
document.querySelectorAll(".workout-card");





// SEARCH FUNCTION


if(searchInput){


searchInput.addEventListener(
"input",
function(){


let search =
this.value.toLowerCase();



workoutCards.forEach(card=>{


let name =
card.querySelector("h3")
.textContent
.toLowerCase();



if(name.includes(search)){


card.style.display="block";


}

else{


card.style.display="none";


}



});


});


}








// FILTER FUNCTION


function filterWorkout(level){



workoutCards.forEach(card=>{


let difficulty =
card.dataset.level;



if(level==="all"){


card.style.display="block";


}


else if(difficulty===level){


card.style.display="block";


}


else{


card.style.display="none";


}



});


}
