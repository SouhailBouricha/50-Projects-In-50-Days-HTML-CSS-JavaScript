const add =document.querySelector(".add");

add.addEventListener("click", () =>{
    addnote(text = "");
});

const notes = JSON.parse(localStorage.getItem("notes"));

notes.forEach((ele) =>{
    addnote(ele);
})
function addnote(text){
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = ` 
    <div class="tools">
        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea id="text" class="${text ? "hidden" : ""}"></textarea>`
    document.body.appendChild(note);
    
    const deleteBtn = note.querySelector(".delete");
    const editBtn = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const textarea = note.querySelector("#text");
    textarea.value = text;
    main.innerHTML = marked(text);
    deleteBtn.addEventListener("click", () =>{
        note.remove();
        update();
    });
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    });
    textarea.addEventListener("input", () =>{
        main.innerHTML = marked(textarea.value);
        update();
    });

}

function update(){
    const textarea = document.querySelectorAll("textarea");
    const notes = [];
    textarea.forEach((ele) => notes.push(ele.value));

    localStorage.setItem("notes", JSON.stringify(notes));
}