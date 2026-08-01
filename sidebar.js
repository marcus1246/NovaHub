// =================================
// NOVAHUB AUTO SIDEBAR ACTIVE
// =================================


document.addEventListener("DOMContentLoaded", () => {


const currentPage =
window.location.pathname.split("/").pop();



const links =
document.querySelectorAll(".sidebar a");



links.forEach(link => {


const page =
link.getAttribute("href");



if(page === currentPage){


link.classList.add("active");


}


});


});
