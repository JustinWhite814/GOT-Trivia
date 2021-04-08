let button = document.querySelector('.play')
let rulesbtn = document.querySelector('information')
let gameStart = document.querySelector('.game')
const choiceA = document.querySelector('#A');
const choiceB = document.querySelector('#B')
const choiceC = document.querySelector('#C')
const question = document.querySelector('.question')
const section = document.querySelector('section')
let questions = [
    
        {
            question: "What is the name of the Biggest Dragon?",
            a: 'Drogon',
            b: 'Viscerion',
            c: 'Rhaegal',
            
            correctAnswer: 'a'
        },
        {
            question: "Which Dragon was killed first",
            
            a: 'Rhaegal',
            b: 'Drogon',
            c: 'Viscerion'
            ,
            correctAnswer: 'c'
        },
        {
            question: "Based on question 2 how did that dragon die",
                a: 'The Knight King',
                b: 'Euron GreyJoy',
                c: 'Killed at Battle of the Bastards'
            ,
            correctAnswer: 'a'

        }
    ];
    // We need a way to stop the questions from appearing
const finalQuestion = questions.length - 1;
// need a way to keep track of the current question
let currentQuestion = 0;
const showQuestion = () => {
    // this goes through the questions
    let q = questions[currentQuestion]
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerText = q.a
    choiceB.innerText = q.b
    choiceC.innerText = q.c
    section.style.display = 'none';

}


button.addEventListener('click', showQuestion)