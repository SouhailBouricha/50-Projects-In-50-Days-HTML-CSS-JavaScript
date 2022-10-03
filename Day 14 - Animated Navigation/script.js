const nav = document.querySelector(".nav");
const toggel = document.querySelector(".toggel");

toggel.addEventListener("click",() => {
    nav.classList.toggle("active");
})