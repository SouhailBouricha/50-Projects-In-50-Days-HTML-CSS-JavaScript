const numbers = document.querySelectorAll("#number");
numbers[0].focus();

numbers.forEach((num,id) =>{
    num.addEventListener('keydown',(e) =>{
        if(e.key >= 0 && e.key <= 9){
            numbers[id].value = '';
            setTimeout(() => {
                numbers[id + 1].focus();
            }, 10);
            console.log(e.key);
        }
        else if(e.key == "Backspace"){
            setTimeout(() => {
                numbers[id - 1].focus();
            }, 10);
        }
    })
});