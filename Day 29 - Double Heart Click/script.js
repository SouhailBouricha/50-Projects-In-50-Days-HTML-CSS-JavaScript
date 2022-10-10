const love = document.querySelector(".loveme");
let i = 0;
love.addEventListener("dblclick",(e) =>{
    const heart = document.createElement("i");
    heart.classList.add("fas","fa-heart");
    const x = e.clientX - love.offsetLeft;
    const y = e.clientY - love.offsetTop;
    heart.style.top = y+"px";
    heart.style.left = x+"px";
    love.appendChild(heart);
    setTimeout(() => { heart.remove() },700);
    i++;
    document.querySelector(".times").innerHTML = i;
});