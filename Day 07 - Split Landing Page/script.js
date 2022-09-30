const left = document.querySelector(".left");
const right = document.querySelector(".right");
const con = document.querySelector(".container");

left.addEventListener("mouseenter",() => {
    con.classList.add("moveleft");
});
left.addEventListener("mouseleave",() => {
    con.classList.remove("moveleft");
});

right.addEventListener("mouseenter",() => {
    con.classList.add("moveright");
});
right.addEventListener("mouseleave",() => {
    con.classList.remove("moveright");
});