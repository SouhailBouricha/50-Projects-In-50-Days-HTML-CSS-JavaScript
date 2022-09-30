const names = ["applause",,"boo","gasp","tada","victory","wrong"];
const con = document.querySelector("#conatainer");
names.forEach(name =>{
    const btn = document.createElement("Button");
    btn.classList.add("btn");
    btn.innerText = name;
    btn.addEventListener("click",() =>{
        stopSounds();
        document.querySelector(`.${name}`).play();
    })
    con.appendChild(btn);
});

function stopSounds(){
    names.forEach(ele =>{
        document.querySelector(`.${ele}`).pause();
        document.querySelector(`.${ele}`).currentTime = 0;
    });
}