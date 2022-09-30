const boxs = document.querySelectorAll(".box");

window.addEventListener("scroll",bringThem);

bringThem();

function bringThem(){
    const triggerr = window.innerHeight / 5 * 4;
    boxs.forEach((ele) =>{
        if(ele.getBoundingClientRect().top < triggerr){
            ele.classList.add("show");
        }
        else{
            ele.classList.remove("show");
        }
    });
}