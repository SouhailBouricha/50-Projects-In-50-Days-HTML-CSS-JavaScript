const counter = document.querySelectorAll(".counter");

counter.forEach((ele) =>{
    const update = () =>{
        let current = +ele.textContent;
        const target = +ele.getAttribute("data-target");
        let inc = Math.ceil(target / 200);
        if (current < target){
            ele.innerText = `${current + inc}`;
            console.log(current)
            setTimeout(update,1);
        }
        // console.log(target);
    }
    update();
});