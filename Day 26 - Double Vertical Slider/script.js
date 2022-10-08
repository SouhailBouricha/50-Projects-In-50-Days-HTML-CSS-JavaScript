const slider_container = document.querySelector(".slider_container");
const left_side = document.querySelector(".left_side");
const right_side = document.querySelector(".right_side");
const down_button = document.querySelector(".down_button");
const up_button = document.querySelector(".up_button");
const slidesLenght = document.querySelectorAll(".left_side div").length;

console.log(slidesLenght);
let active = 0;
left_side.style.top = `-${(slidesLenght - 1) * 100}vh`;

down_button.addEventListener("click",() => change("down"));
up_button.addEventListener("click",() => change("up"));

function change(dir){
    if(dir =='up'){
        active++;
        if(active > slidesLenght - 1){
            active = 0;
        }
    }
    else if(dir =='down'){
        active--;
        if(active < 0){
            active = slidesLenght - 1;
        }
    }
    left_side.style.transform = `translateY(${(active) * 100}%)`;
    right_side.style.transform = `translateY(-${(active) * 100}%)`;
    console.log("hi");

}