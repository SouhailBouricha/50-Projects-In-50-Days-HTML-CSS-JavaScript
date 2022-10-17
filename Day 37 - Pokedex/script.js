const container = document.querySelector(".container");
const numbers = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const fetchPokemons = async () =>{
    for (let i = 1; i <= numbers; i++) {
        await fetchPokemon(i);
    }
}

const fetchPokemon = async (id) =>{
    const Url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(Url);
    const data = await res.json();
    // console.log(data);
    console.log(data.types[0].type.name);
	createElement(data);
}
fetchPokemons();

function createElement(data){
	const pokiEl = document.createElement("div");
	pokiEl.classList.add("pokemon");
	const id = data.id.toString().padStart(3,'0');
	const name = data.name[0].toUpperCase() + data.name.slice(1);
	pokiEl.innerHTML = `      
		<div class="imgContainer">
		  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
		</div>
		<div class="info">
		  <span class="num">#${id}</span>
		  <h3 class="name">${name}</h3>
		  <small class="type">Type : <span>${data.types[0].type.name}</span></small>
		</div>`;
	pokiEl.style.backgroundColor = `${colors[data.types[0].type.name]}`;
	container.appendChild(pokiEl);

}