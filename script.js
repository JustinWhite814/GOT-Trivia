let button = document.querySelector('.play')
let rulesbtn = document.querySelector('information')
let gameStart = document.querySelector('.game')
const choiceA = document.querySelector('#A')
const choiceB = document.querySelector('#B')
const choiceC = document.querySelector('#C')
const question = document.querySelector('.question')
const section = document.querySelector('section')
let questions1 = [
    
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

        },
        {
            question: 'Which Dragon did John Snow ride?',
                a: 'Rhaegal',
                b: 'Viscerion', 
                c: 'Drogon',
          
          correctAnswer: 'a'      
        },
        {
            question: 'Which Dragon has blue eyes by season 7?',
                a: 'Rhaegal',
                b: 'Viscerion', 
                c: 'Drogon',
          
          correctAnswer: 'b'      
        },
    ];
// We need a way to stop the questions from appearing
const finalQuestion = questions1.length - 1;
Array.from(document.querySelectorAll('.choice')).forEach(q => q.addEventListener('click', checkAnswer))

// need a way to keep track of the current question

let currentQuestion = 0;
const showQuestion = () => {
    // this goes through the questions
    let q = questions1[currentQuestion]
    // sets the question up on the page
    question.innerHTML = "<p>"+ q.question +"</p>";
    // gives you choice A:
    choiceA.innerText = q.a
    // choice B:
    choiceB.innerText = q.b
    // choice C:
    choiceC.innerText = q.c
    // this removes the regular game menu 
    section.style.display = 'none';
    
    
   

}
// Check answer function:
function checkAnswer(ev)  {
let q = questions1[currentQuestion]
// be sure to remove this Justin
console.log(q, ev.target.id.toLowerCase())
// this takes get what I am targeting, makes it lowercase and compares it to the
// actual answer in the Array
if(q.correctAnswer == ev.target.id.toLowerCase()){
    console.log('correct')
    if(currentQuestion < finalQuestion)
{   currentQuestion++
    showQuestion()
}
}else {
    console.log('incorrect')

}
}



button.addEventListener('click', showQuestion)