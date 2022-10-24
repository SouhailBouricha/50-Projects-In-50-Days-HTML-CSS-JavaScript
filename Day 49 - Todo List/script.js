const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todos = document.querySelector(".todos");

const todosLs = JSON.parse(localStorage.getItem('todos'));
console.log(todosLs);
if(todosLs){
    todosLs.forEach(element => {
        addtodo(element);
    });
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    addtodo();
    input.value = "";
});

function addtodo(todo){
    let todotext = input.value;

    if(todo){
        todotext = todo.text
    }
    if(todotext){
        const todoEl = document.createElement("li");
        if(todo && todo.completed){
            todoEl.classList.add("completed");
        }
        todoEl.innerText = todotext;
        todoEl.addEventListener("click" ,(e) => {
            todoEl.classList.toggle("completed")
            updateLS();
        });
        todoEl.addEventListener("contextmenu" ,(e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });
        todos.appendChild(todoEl);
    }

    updateLS();
}

function updateLS(){
    const todosEl = document.querySelectorAll("li");
    const todos = []
    todosEl.forEach(ele =>{
        todos.push({
            text: ele.innerText,
            completed: ele.classList.contains("completed")
        })
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}