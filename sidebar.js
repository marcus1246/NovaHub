// =================================
// NOVAHUB SIDEBAR ACTIVE SYSTEM
// =================================


window.addEventListener("load", function(){


    let currentPage = 
    window.location.pathname.split("/").pop();



    let sidebarLinks =
    document.querySelectorAll(".sidebar a");



    sidebarLinks.forEach(function(link){


        let linkPage =
        link.getAttribute("href");



        if(linkPage === currentPage){


            link.classList.add("active");


        }


    });


});
