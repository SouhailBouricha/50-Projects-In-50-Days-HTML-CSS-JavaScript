const search = document.querySelector(".searchinput");
const btn = document.querySelector(".searchbtn");

btn.addEventListener("click",() =>{
    console.log("vfsv")
    search.classList.toggle("active");
    btn.classList.toggle("active");
    search.focus()
});