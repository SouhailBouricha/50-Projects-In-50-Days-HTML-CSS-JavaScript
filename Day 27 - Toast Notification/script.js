const show  = document.querySelector(".show");
const all  = document.querySelector(".all");
const messages = ["Message One","Message Tow","Message Three"];
const type = ["info","good","bad"];



show.addEventListener("click",() =>{
    const newMessage = document.createElement("div");
    newMessage.classList.add("oneMess");
    newMessage.classList.add(type[Math.floor(Math.random() * type.length)]);
    newMessage.innerText = messages[Math.floor(Math.random() * messages.length)];
    all.appendChild(newMessage);
    setTimeout(() =>{ newMessage.remove() },4000);
}); 