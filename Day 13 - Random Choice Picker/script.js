const area = document.querySelector(".area");
const choices = document.querySelector(".choices");

area.focus();

area.addEventListener("input",(e) =>{
    updateAll(area.value);
    if(e.inputType == "insertLineBreak"){
        const times = 30;
        let id = setInterval(() => {
            let ele = pick();
            highlite(ele);
            setTimeout(() => {
                nothighlite(ele);
            }, 100);
        }, 100);
        setTimeout(() => {
            clearInterval(id)
            setTimeout(() => {
                let ele = pick();
                highlite(ele);
            }, 100);
          
        }, times * 100);
    };
});

function updateAll(input){
    const arr = input.split(",").filter(mote => mote.trim() !== "").map(mot => mot.trim());
    choices.innerHTML = "";
    arr.forEach(element => {
        const spa = document.createElement("span");
        spa.classList.add("choice");
        spa.innerText = element;
        choices.appendChild(spa);
    });
}
function pick() {
    const tags = document.querySelectorAll('.choice');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlite(tag){
    tag.classList.add("active");
}

function nothighlite(tag){
    tag.classList.remove("active");
}