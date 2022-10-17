const imageContainer = document.querySelector(".imageContainer");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let id = setInterval(() =>{ moveRight() },2000);
let space = 0;



right.addEventListener("click", () =>{
    clearInterval(id);
    moveRight();
    id = setInterval(() =>{ moveRight() },2000);
});

left.addEventListener("click", () =>{
    clearInterval(id);
    moveLeft();
    id = setInterval(() =>{ moveRight() },2000);
});

function moveRight(){
    space += 100;
    if(space > 300){
        space = 0;
    }
    imageContainer.style.transform = `translateX(-${space}%)`;
    console.log(space);
}
function moveLeft(){
    space -= 100;
    if(space < 0){
        space = 300
    }
    imageContainer.style.transform = `translateX(-${space}%)`;
    console.log(space);
}