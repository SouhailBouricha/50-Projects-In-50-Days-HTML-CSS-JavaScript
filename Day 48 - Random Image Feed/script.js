const container = document.querySelector(".container");

for (let i = 0; i < 15; i++) {
    const element = document.createElement("img");
    element.src = `https://source.unsplash.com/random/${Math.floor(Math.random() * 10) + 300}x${Math.floor(Math.random() * 10) + 300}`;
    element.classList.add("img");
    container.appendChild(element);
}