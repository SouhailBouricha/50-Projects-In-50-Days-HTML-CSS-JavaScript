const imgs = document.querySelectorAll("img");
const li = document.querySelectorAll("li");

console.log(imgs,li);

li.forEach((ele,id) =>{
    ele.addEventListener("click", () => update(id))
});

function update(id){
    imgs.forEach(img =>{
        img.classList.remove("show");
    });
    li.forEach(item =>{
        item.classList.remove("active");
    });
    imgs[id].classList.add('show');
    li[id].classList.add('active');
}