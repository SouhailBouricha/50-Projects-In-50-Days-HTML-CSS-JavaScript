const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let x = 50;
let y = 50;
let color = "black";
function draw_circle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
    ctx.fillStyle = color;
    ctx.fill();
}
drawCiecel(100,200);