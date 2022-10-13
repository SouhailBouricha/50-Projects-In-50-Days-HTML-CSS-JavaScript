const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const replay = document.querySelector(".replay");
const final = document.querySelector(".final");

// console.log(nums);

replay.addEventListener('click',(e) =>{
    nums.forEach((num) =>{
        console.log(num.classList.value);
        num.classList.value = ""
    });
    nums[0].classList.add("in");
    counter.classList.remove("hide");   
    final.classList.remove("show");
    runAnnimation();
});
runAnnimation();

function runAnnimation(){
    nums.forEach((num,index) =>{
        const length = nums.length - 1
        num.addEventListener("animationend",(e) =>{
            console.log(num,length,e.animationName);
            if(e.animationName == "comeIn"){
                num.classList.remove("in");
                num.classList.add("out");
            }
            else if(e.animationName == "comeOut" && num.nextElementSibling){
                num.nextElementSibling.classList.add("in");
            }
            else{
                counter.classList.add("hide");
                final.classList.add("show");
            }
        })
    })
}