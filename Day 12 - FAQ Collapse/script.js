const faqToggel = document.querySelectorAll(".faqToggel");

faqToggel.forEach(ele =>{
    ele.addEventListener("click",() =>{
        ele.parentElement.classList.toggle("active");
    });
});