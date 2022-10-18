const result = document.querySelector("#result");
const filter = document.querySelector("#filter");
const listItem = []; 

filter.addEventListener("input", (e) => filterData(e.target.value))

async function getData(){
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();
    result.innerHTML = '';
    // console.log(results);
    results.forEach(element => {
        const li = document.createElement("li");
        listItem.push(li);
        li.innerHTML = `
          <img src="${element.picture.large}" alt="${element.name.first}">
          <div class="userInfo">
            <h4>${element.name.first} ${element.name.last}</h4>
            <p>${element.location.city}, ${element.location.country}</p>
          </div>
        `;
        result.appendChild(li);
    });
}
getData();

function filterData(serchTerm){
    listItem.forEach(ele =>{
        if(ele.innerHTML.toLowerCase().includes(serchTerm.toLowerCase())){
            ele.classList.remove("hide");
        }
        else{
            ele.classList.add("hide");
        }
    });
}