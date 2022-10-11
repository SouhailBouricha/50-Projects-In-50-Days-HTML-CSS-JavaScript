const result = document.querySelector(".result");
const clipboard = document.querySelector(".clipboard");
const number = document.querySelector("#number");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numberletters = document.querySelector("#numberletters");
const symbols = document.querySelector("#symbols");
const btnLarge = document.querySelector(".btn-large");
const sucsees = document.querySelector(".sucsees");
const container = document.querySelector(".container");

sucsees.style.top = container.offsetTop+"px";
sucsees.style.transform = "translateY(-130%)";
sucsees.style.display = "none";
btnLarge.addEventListener("click", () =>{
    const hasuppercase = uppercase.checked
    const haslowercase = lowercase.checked
    const hasnumberletters = numberletters.checked
    const hassymbols = symbols.checked
    const lentgh = +number.value;
    result.innerHTML = genratePassword(hasuppercase,haslowercase,hasnumberletters,hassymbols,lentgh);
});

clipboard.addEventListener("click",() =>{
    if(!result.innerHTML){
        return;
    }
    else{
        const area = document.createElement("textarea");
        area.innerText = result.innerHTML;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        sucsees.style.display = "block";
        setTimeout(() =>{ sucsees.style.display = "none"; },1000);
    }
});

const randomFunc = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    sumbol: getSymbol,
}
function getLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbol(){
    const sumbols = "!@#$%^&*(){}[]=<>/,.";
    return sumbols[Math.floor(Math.random() * sumbols.length)];
}

function genratePassword(upper,lower,number,sumbol,lentgh){
    let result = "";
    let idx = 0;
    const countTypes = upper + lower + number + sumbol;
    const arrTypes = [{upper},{lower},{number},{sumbol}].filter((ele) => Object.values(ele)[0]);
    if(arrTypes.length == 0){
        return "None";
    }
    for (let i = 0; i < lentgh; i ++) {
        result += randomFunc[Object.keys(arrTypes[idx])[0]]();
        idx++;
        if(idx > countTypes - 1){
            idx = 0;
        }
    }
    return result;
}