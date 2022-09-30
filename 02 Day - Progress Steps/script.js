const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const progress_bar = document.querySelector(".progress_bar");
const circel = document.querySelectorAll(".circel");


let current = 1;
let values = { 1 : 0 , 2 : 33 , 3 : 66 , 4 : 100 }
next.addEventListener("click",()=>{
    current++;
    if(current >= 4){
        current = 4;
    }
    update("A");
    console.log(current,circel);
})

prev.addEventListener("click",() =>{
    current--;
    if(current < 1){
        current = 1;
    }
    update("R");
    console.log(current,circel);
});

function update(arr){
    if(arr == "A"){
        circel[current - 1].classList.add("active");
        progress_bar.style.width =  values[current] + "%";
        console.log(values[current]);
    }
    else if(arr == "R"){
        circel[current].classList.remove("active");
        progress_bar.style.width =  values[current] + "%";
        console.log(values[current]);
        
    }
    if(current == 4){
        next.disabled = true;
    }
    else if(current == 1){
        prev.disabled = true;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}
