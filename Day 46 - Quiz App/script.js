const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz_container = document.querySelector(".quiz_container");
const quiz_question = document.querySelector(".quiz_question");
const answers = document.querySelectorAll(".answer");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submit = document.querySelector("#submit");


let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
    const CurrentQuizData = quizData[currentQuiz];
    quiz_question.innerHTML = CurrentQuizData.question
    a_text.innerHTML = CurrentQuizData.a   
    b_text.innerHTML = CurrentQuizData.b       
    c_text.innerHTML = CurrentQuizData.c   
    d_text.innerHTML = CurrentQuizData.d       
}
submit.addEventListener("click", () =>{
    // Uncheckd()
    let checkd_answer = checkdAnswer()
    if(checkd_answer){
        if(checkd_answer.id == quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz()
            Uncheckd()
        }
        else{
            quiz_container.innerHTML = `
            <h2>You answer ${score} question correctly from ${quizData.length}</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
});

function Uncheckd(){
    answers.forEach(ele => ele.checked = false)
}
function checkdAnswer(){
    let ansewr;
    answers.forEach(ele => {
        if(ele.checked == true){
            ansewr = ele;
        }
    });
    return ansewr
}