const range = document.querySelector("#range");
const label = document.querySelector("#label");

range.addEventListener("input", (e) =>{
    label.innerHTML = e.target.value;
    const rangeWidth = +getComputedStyle(range).getPropertyValue("width").slice(0,-2);
    const labelWidth = +getComputedStyle(label).getPropertyValue("width").slice(0,-2);
    const min = +range.min
    const max = +range.max
    const value = +range.value
    const left = value * (rangeWidth / max) - labelWidth / 2 + scale(value,min,max,10,-10);
    label.style.left = left+"px";
});


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }