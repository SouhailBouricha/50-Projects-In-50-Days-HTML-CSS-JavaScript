const nav = document.querySelector("nav");

window.addEventListener("scroll",(e) => { fixnav(e) });

function fixnav(e){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add("active");
    }
    else{
        nav.classList.remove("active");
    }
}