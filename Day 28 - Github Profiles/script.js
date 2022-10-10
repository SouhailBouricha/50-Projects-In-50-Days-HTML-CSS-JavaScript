const form = document.querySelector(".form");
const input = document.querySelector(".input");
const main = document.querySelector("main");
const Root_Url = "https://api.github.com/users/"
form.addEventListener("submit", loadData);

function loadData(e){
    e.preventDefault();
    if(input.value){
        getData(input.value);
        input.value = "";
    }
}

async function getData(user){
    try{
        const { data } = await axios(Root_Url + user);
        BuildCard(data);
        getRepos(user);
    }
    catch(err){
        BuildErrorCard("No Profile With This User");
    }
}

function BuildCard(user){
    main.innerHTML = `<div class="card">
    <div class="avatar">
      <!-- src="https://randomuser.me/api/portraits/men/30.jpg" -->
      <img src="${user.avatar_url}" />
    </div>
    <div class="card_info">
      <h2>${user.name}</h2>
      <p>
        ${user.bio}
      </p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>
      <div class="repos">
      </div>
    </div>
  </div>`
}

function BuildErrorCard(msg){
    main.innerHTML = `<div class="card">
    <h1 class="err">${msg}</h1>    
    </div>`
}
function AddRepos(data){
    const repos = document.querySelector(".repos");
    data.slice(0,5).forEach((element,id) => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = `${element.html_url}`;
        repoEl.target = `_blank`;
        repoEl.innerText = `${element.name}`;
        repos.appendChild(repoEl);
    });
}
async function getRepos(user){
    try{
        console.log(Root_Url + user  + '/repos?sort=created');
        const { data } = await axios(Root_Url + user  + '/repos?sort=created');
        // AddRepos(data);
        AddRepos(data);
    }
    catch(err){
        BuildErrorCard("Problem with fetching the repos");
    }
}