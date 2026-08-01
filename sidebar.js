// =================================
// NOVAHUB AUTOMATIC ACTIVE SIDEBAR
// =================================


document.addEventListener("DOMContentLoaded", function(){



let currentPage = 
window.location.pathname.split("/").pop();



// If empty, default to dashboard

if(currentPage === ""){

    currentPage = "dashboard.html";

}



let links = 
document.querySelectorAll(".sidebar a");



links.forEach(function(link){


let page =
link.getAttribute("href");



if(page === currentPage){


link.classList.add("active");


}


});



});
