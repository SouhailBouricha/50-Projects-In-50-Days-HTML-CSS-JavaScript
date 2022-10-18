const ratingsContainer = document.querySelector(".ratingsContainer");
let rate = ""
const panel = document.querySelector(".panel");
const send = document.querySelector(".send");
const ratings = document.querySelectorAll(".rating");

ratingsContainer.addEventListener("click", (e) =>{
    if(e.target.parentElement.classList.contains("rating")){
        removRating();
        e.target.parentElement.classList.add("active");
        rate = e.target.nextElementSibling.innerHTML;
        console.log(rate);
    }
});

send.addEventListener("click", (e) =>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${rate}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
});

function removRating(){
    ratings.forEach(ele => ele.classList.remove("active"));
}