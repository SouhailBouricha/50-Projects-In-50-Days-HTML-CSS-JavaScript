const password = document.querySelector("#password");
const background = document.querySelector("#background");

password.addEventListener("input",(e) =>{
    console.log((20 - password.value.length * 2.5),background);
    background.style.filter = `blur(${(20 - password.value.length * 2.5)}px)`;
});