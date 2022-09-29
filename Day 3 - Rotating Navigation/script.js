const opena = document.querySelector(".menu");
const closea = document.querySelector(".close");
const con = document.querySelector(".container");
const nav = document.querySelector("nav");
opena.addEventListener("click",() =>{
    con.classList.add("active");
    nav.classList.add("active");
});
closea.addEventListener("click",() =>{
    con.classList.remove("active");
    nav.classList.remove("active");
});