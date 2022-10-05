const body = document.body;
const slides = document.querySelectorAll(".slide");
const right = document.querySelector(".arrow-right");
const left = document.querySelector(".arrow-left");

let active = 0;

setBody();
setSlide();


right.addEventListener("click",() =>{
    active++;
    if(active > slides.length - 1){
        active = 0;
    }
    setBody();
    setSlide();
});
left.addEventListener("click",() =>{
    active--;
    if(active < 0){
        active = slides.length - 1;
    }
    setBody();
    setSlide();
});

function setBody(){
    body.style.backgroundImage = slides[active].style.backgroundImage;
}
function setSlide(){
    slides.forEach((ele) =>{
        ele.classList.remove("active");
    })

    slides[active].classList.add("active");
}