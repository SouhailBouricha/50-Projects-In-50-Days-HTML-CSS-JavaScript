const click = document.querySelectorAll(".click");

click.forEach(btn =>{
    btn.addEventListener("click",(e) =>{
        let topA = e.clientY - btn.offsetTop;
        let leftA = e.clientX - btn.offsetLeft;
        console.log(topA,leftA);
        // <span class="effect"></span>
        const span = document.createElement("span");
        span.classList.add("effect");
        span.style.top = topA+"px";
        span.style.left = leftA+"px";
        btn.appendChild(span);

        setTimeout(() => { span.remove() } ,500)
    });
});