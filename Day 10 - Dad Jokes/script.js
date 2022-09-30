const jokeA = document.querySelector('.joke');
const btn = document.querySelector('.btn');

btn.addEventListener("click",GetJoke)
GetJoke();
async function GetJoke(){
    const res = await fetch("https://icanhazdadjoke.com/",{ headers : {"Accept": "application/json"}});
    const data = await res.json();
    jokeA.innerText = data.joke;
}