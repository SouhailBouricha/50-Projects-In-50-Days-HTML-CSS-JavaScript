const small = document.querySelectorAll(".small");
const percentage = document.querySelector(".percentage");
const remaind = document.querySelector(".remaind");
const liters = document.querySelector(".liters");
liters.innerText = "2L";
small.forEach((cup,idx) =>{
    cup.addEventListener("click",() => { highlite(idx) });
});

function highlite(idx){
    if(small[idx].classList.contains("full")){
        if(idx + 1 !== small.length){
            if(!small[idx + 1].classList.contains("full")){
                idx--;
            }
        }
        else{
            idx--;
        }
    }
    small.forEach((ele,idx2) =>{
        if(idx >= idx2){
            ele.classList.add("full");     
        }
        else{
            ele.classList.remove("full");     
        }
    });
    UpdateCup();
}

function UpdateCup(){
    const fullCups = document.querySelectorAll(".full").length;
    const smallCups = document.querySelectorAll(".small").length;
    if(fullCups == 0){
        percentage.innerText = `${12.5 * fullCups}%`;
        percentage.style.visibility = "hidden";
        percentage.style.height = "0px";
    }
    else{
        percentage.style.visibility = "visible";
        percentage.style.height = `${41.25 * fullCups}px`;
        percentage.innerText = `${12.5 * fullCups}%`;
    }
    if(fullCups == smallCups){
        remaind.style.visibility = "hidden";
        remaind.style.height = `0px`;
    }
    else{
        remaind.style.visibility = "visible";
        liters.innerText = `${ 2 - (fullCups * 0.25)}L`;
        console.log(fullCups * 0.25,fullCups);
        // remaind.style.height = `auto`;

    }
}