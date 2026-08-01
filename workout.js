// =================================
// NOVAHUB PERSONALIZED WORKOUTS
// =================================



document.addEventListener("DOMContentLoaded", function(){



let preference =

localStorage.getItem("userGender")

||

"both";





let container =

document.querySelector(".content");



let sections =

document.querySelectorAll(".workout-section");





let menSection = null;

let womenSection = null;

let bothSection = null;





sections.forEach(section => {



let title =

section.querySelector("h2").textContent;




if(title.includes("Men")){


menSection = section;


}



if(title.includes("Women")){


womenSection = section;


}



if(title.includes("Everyone")){


bothSection = section;


}



});







if(preference === "male"){


container.appendChild(menSection);


container.appendChild(bothSection);


container.appendChild(womenSection);



}





else if(preference === "female"){


container.appendChild(womenSection);


container.appendChild(bothSection);


container.appendChild(menSection);



}





else{


container.appendChild(bothSection);


container.appendChild(menSection);


container.appendChild(womenSection);



}




});
