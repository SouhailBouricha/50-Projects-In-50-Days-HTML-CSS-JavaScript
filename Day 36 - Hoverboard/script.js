const container = document.querySelector(".container");
const colors = ["#e74c3c","#8e44ad","#3498db","#e67e22","#2ecc71",]
const Number = 500;

for(i = 0; i < 500; i++){
    const sqeuere = document.createElement("div");
    sqeuere.classList.add("sqeuere");
    sqeuere.addEventListener("mouseover", () => setColor(sqeuere) );
    sqeuere.addEventListener("mouseleave", () => resetColor(sqeuere) );
    container.appendChild(sqeuere);
}

function setColor(element){
    const color = getColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function resetColor(element){
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}
function getColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}