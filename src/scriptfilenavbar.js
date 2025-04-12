document.addEventListener('DOMContentLoaded',function(){
    const navbarToggler=document.querySelector(".navbar-toggler");
    if(navbarToggler){
        navbarToggler.addEventListener("click",function(){
            document.getElementById("navbarNav").classList.toggle("show");
        });
    }

    const navLinks=document.querySelectorAll("#navbarNav .nav-link");
        navLinks.forEach(link=>{
            link.addEventListener("click",function(){
                navLinks.forEach(nav=>nav.classList.remove("active"));
                this.classList.add("active");
            });
        });
});