const canvas = document.querySelector(".canvas");
const colorEl = document.querySelector(".color");
const decrese = document.querySelector(".decrese");
const sizeEl = document.querySelector(".size");
const increseEl = document.querySelector(".increse");
const clear = document.querySelector(".clear");
const ctx = canvas.getContext("2d");

let size = 20;
let x;
let y;
let color = "black";
let isPressed = false;

canvas.addEventListener("mousedown",(e) =>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(isPressed,x,y);
});
canvas.addEventListener("mouseup",(e) =>{
    isPressed = false;
    x = undefined;
    y = undefined;
    console.log(isPressed,x,y);
});
canvas.addEventListener("mousemove",(e) =>{
    if(isPressed){
        let x2 = e.offsetX;
        let y2 = e.offsetY;
        console.log(isPressed,x,y);
        draw_circle(x2,y2);
        draw_line(x,y,x2,y2);
        x = x2;
        y = y2;
    }
});

colorEl.addEventListener("change",(e) =>{
    color = e.target.value;
});

decrese.addEventListener("click",(e) =>{
    size -= 5;
    if(size < 5){
        size = 5;
    }
    sizeEl.innerText = size;
});
increseEl.addEventListener("click",(e) =>{
    size += 5;
    if(size > 50){
        size = 50;
    }
    sizeEl.innerText = size;
});
clear.addEventListener("click",(e) =>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
function draw_circle(x,y){
    const circle = new Path2D();
    circle.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill(circle);
}
function draw_line(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size * 2;
    ctx.strokeStyle = color;
    ctx.stroke();

}
