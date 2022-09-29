const panels = document.querySelectorAll(".panel");

panels.forEach((ele) =>{
    ele.addEventListener("click",() =>{
        removeClass();
        ele.classList.add("active");
    });
});

function removeClass(){
    panels.forEach((ele) =>{
        ele.classList.remove("active");
    });
}