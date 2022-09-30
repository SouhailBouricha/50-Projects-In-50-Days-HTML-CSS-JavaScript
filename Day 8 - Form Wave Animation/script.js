const labels = document.querySelectorAll("label");

labels.forEach((ele) =>{
    ele.innerHTML = ele.innerText.split("").map((letter,index) => `<span class="spanO" style="transition-delay: ${index * 50}ms">${letter}</span>`).join("");
})