const Api_Url = "https://api.themoviedb.org/3/discover/movie?api_key=0139c72dd2242f8e8ad8ea45bcc9d9c4&sort_by=popularity.desc&page=1";
const Search_Url = "https://api.themoviedb.org/3/search/movie?api_key=0139c72dd2242f8e8ad8ea45bcc9d9c4&query=";
const Pic_Path = "https://image.tmdb.org/t/p/w1280"
const form = document.querySelector(".form");
const search = document.querySelector(".search");
const main = document.querySelector("main");

async function getData(url){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.results);
    ManDom(data.results);
}

function ManDom(movies){
    main.innerHTML = "";
    movies.forEach(element => {
        let {title,backdrop_path,overview,vote_average} = element;
        console.log(overview.slice(0,100).split("").slice(0,-1).join(""));
        const movie = document.createElement("div");
        movie.classList.add("movie");
        movie.innerHTML = `
        <img
        src="${Pic_Path+backdrop_path}"
        alt=""
      />
      <div class="movieInfo">
        <h3>${title}</h3>
        <div class="rate ${rate(vote_average)}">${vote_average}</div>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview.slice(0,240).split("").slice(0,-1).join("")}...
      </div>`;
      main.appendChild(movie)
    });
}
function rate(vote){
    if(vote >= 8){
        return "green";
    }
    else if(vote >= 5){
        return "orange"
    }
    else{
        return "red"
    }
}
getData(Api_Url);
// getData(Search_Url + "Batman");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    if(search.value && search.value.trim() !== ""){
        getData(Search_Url + search.value);
        search.value = "";
    }
    else{
        window.location.reload();
    }
    // console.log(search.value);
})