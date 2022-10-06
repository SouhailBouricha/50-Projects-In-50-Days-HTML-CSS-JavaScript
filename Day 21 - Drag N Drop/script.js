const fill = document.querySelector(".fill");
const empthy = document.querySelectorAll(".empthy");
let newFill = fill;
fill.addEventListener("dragstart",(event) => {dragStart(event)});

function dragStart(event){
    fill.classList.add("hold");
    setTimeout(() => { fill.remove() },0);
}


empthy.forEach(ele =>{
    ele.addEventListener("dragenter",(event)=>{
        event.preventDefault();
        ele.classList.add("hovred");
    });
    ele.addEventListener("dragleave",(event)=>{
        ele.classList.remove("hovred");
    });
    ele.addEventListener("dragover",(event)=>{
        event.preventDefault();
    });
    ele.addEventListener("drop",(event)=>{
        event.preventDefault();
        newFill.classList.remove("hold");
        ele.appendChild(newFill);
        setTimeout(() => ele.classList.remove("hovred"),0);
    });
    
});