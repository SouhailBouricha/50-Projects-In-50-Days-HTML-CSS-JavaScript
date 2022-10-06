const darkMode = document.querySelector(".darkMode");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconde = document.querySelector(".seconde");
const timeNow = document.querySelector(".time");
const dateNow = document.querySelector(".date");


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


document.querySelector("html").classList.add("dark");
darkMode.addEventListener("click",() =>{
    document.querySelector("html").classList.toggle("dark");
});
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function setTime(){
    const time = new Date();
    const hours = time.getHours();
    const hoursReady = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const day = time.getDay();
    const month = time.getMonth();
    const date = time.getDate();
    const ampm = hours > 12 ? "PM" : "Am";
    // console.log(time,hours,hoursReady,minutes,seconds);
    console.log(date);
    hour.style = `transform: translate(-50%, -100%) rotate(${scale(hoursReady,0,11,0,360)}deg)`;
    minute.style = `transform: translate(-50%, -100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
    seconde.style = `transform: translate(-50%, -100%) rotate(${scale(seconds,0,59,0,360)}deg)`;
    timeNow.innerText = `${hoursReady} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateNow.innerHTML = `${days[day]}, ${months[month]}, <span class="circel">${date}</span>`;
}
setTime();
setInterval(setTime,1000);