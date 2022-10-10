const head = document.querySelector("h1");
const input = document.querySelector("input");

let word = "We Love Programming";
let i = 1;
let speed = 300 / input.value;
function write(){
    head.innerText = word.slice(0,i);
    i++;

    if(i > word.length){
        i = 0;
    }
    setTimeout(write,speed)
}
write();
input.addEventListener("input", () => speed = 300 / input.value);