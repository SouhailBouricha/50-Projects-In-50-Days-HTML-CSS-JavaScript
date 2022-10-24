const sections = document.querySelectorAll(".section");
const choseInsect = document.querySelectorAll(".choseInsect");
const time = document.querySelector(".time");
const scoreel = document.querySelector(".score");
const message = document.querySelector(".message");
const startBtn = document.querySelector(".startBtn");
const game = document.querySelector(".game");
let seconde = 0;
let score = 0;
let ihdatiyat = {}
startBtn.addEventListener("click", () => {
    sections[0].classList.add("visible");
});
choseInsect.forEach(btn =>{
    btn.addEventListener("click", () =>{
        ihdatiyat = {
            img : btn.querySelector("img").src,
            alt : btn.querySelector("img").alt,
         }
        sections[1].classList.add("visible");
        setTimeout(createInsits, 1000);
        setInterval(starttimer,1000);
    });
});

function starttimer(){
    let m = Math.floor(seconde / 60);
    let s = seconde % 60;
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    time.innerHTML = `Time : ${m}:${s}`;
    seconde++;
}
function createInsits(){
    const insit = document.createElement("div");
    insit.classList.add("insect");
    insit.innerHTML = `<img src="${ihdatiyat.img}" alt="${ihdatiyat.alt}">`
    const { x , y } = getRandomposition();
    insit.style.top = `${y}px`;
    insit.style.left = `${x}px`;
    insit.addEventListener("click",() => {
        cuontGame(insit);
        setTimeout(() => createInsits(),1000);
        setTimeout(() => createInsits(),1500);
        scoreOrg();
    });
    game.appendChild(insit);
}

function getRandomposition(){
    const x = Math.random() * (window.innerWidth - 200) + 100 
    const y = Math.random() * (window.innerHeight - 200) + 100 
    return { x, y}
}

function cuontGame(insit){
    insit.classList.add("couth");
    console.log(insit);
    setTimeout(() => insit.remove(),1000);
}
function scoreOrg(){
    score++;
    scoreel.innerHTML = `Score : ${score}`;
    if(score > 19){
        message.classList.add("visi");
    }
}