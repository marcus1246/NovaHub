// =================================
// NOVAHUB AUTOMATIC SIDEBAR ACTIVE
// =================================


const currentPage =
window.location.pathname.split("/").pop();



const sidebarLinks =
document.querySelectorAll(".sidebar a");



sidebarLinks.forEach(link => {


    const linkPage =
    link.getAttribute("href");



    if(linkPage === currentPage){


        link.classList.add("active");


    }


});
