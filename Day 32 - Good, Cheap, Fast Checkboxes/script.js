const toggels = document.querySelectorAll(".toggel");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggels.forEach((ele) =>{
    ele.addEventListener("change", (e) =>{
        doTheTrick(e)
    });
});

function doTheTrick(clickedone){
    if(good.checked && cheap.checked && fast.checked){
        console.log(clickedone.target,good);
        if(good == clickedone.target){
            fast.checked = false;
        }
        else if(cheap == clickedone.target){
            good.checked = false;
        }
        else if(fast == clickedone.target){
            cheap.checked = false;
        }
    }
}