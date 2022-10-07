const header = document.querySelector(".card-header");
const title = document.querySelector(".card-title");
const excerpt = document.querySelector(".card-excerpt");
const profile = document.querySelector(".profile-img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");
const animatedbg = document.querySelectorAll(".animated-bg");
const animatedbgtext = document.querySelectorAll(".animated-bg-text");

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt=""/>';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, dolores!';
    profile.innerHTML = '<img src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />';
    name.innerHTML = 'Jhon Doa';
    date.innerHTML = 'Oct 08, 2022';
    animatedbg.forEach(ele => ele.classList.remove("animated-bg"))
    animatedbgtext.forEach(ele => ele.classList.remove("animated-bg-text"))
}

setTimeout(getData,2500);