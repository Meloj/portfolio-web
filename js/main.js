/*------ navigation bar --------*/
(() =>{

const hamburgerBtn = document.querySelector(".hamburger-btn"),
navMenu = document.querySelector(".nav-menu"),
closeNavBtn = navMenu.querySelector(".close-nav-menu");

hamburgerBtn.addEventListener("click", showNavMenu);
closeNavBtn.addEventListener("click", hideNavMenu);

function showNavMenu(){
    navMenu.classList.add("open");
}

function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
}

function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
        document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
}

// attach an event handler to document
document.addEventListener("click", (event) =>{
    if(event.target.classList.contains('link-item')){
        /* make sure event.target.hash has a value before overridding default behavior*/
        if(event.target.hash !== ""){
            // prevent default anchor click behavior
            event.preventDefault();
            const hash = event.target.hash;

            // deactivate existing active 'section'
            document.querySelector(".section.active").classList.add("hide");
            document.querySelector(".section.active").classList.remove("active");

            // active new 'section'
            document.querySelector(hash).classList.add("active");
            document.querySelector(hash).classList.remove("hide");

            //deactivate existing active navigation menu 'link-item'
            navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
            navMenu.querySelector(".active").classList.remove("active","inner-shadow");

            // activate new navigation menu 'link-item'
            event.target.classList.add("active","inner-shadow");
            event.target.classList.remove("outer-shadow","hover-in-shadow");
            
            // hide navigation menu
            hideNavMenu();
        }

        // add hash (#) to url
        window.location.hash = hash;
    }
})

})();

/*------ hide all sections except active ------- */

(() =>{

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})