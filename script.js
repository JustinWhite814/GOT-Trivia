const dragonBtn = document.querySelector('.dragon')
const houseBtn = document.querySelector('.houses')
const bkShowBtn = document.querySelector('.bookshow')
const playBtn = document.querySelector('.play')
const option = document.querySelector('.options')
const rulesBtn = document.querySelector('.info')
const gameStart = document.querySelector('.game')
const choiceA = document.querySelector('#A')
const choiceB = document.querySelector('#B')
const choiceC = document.querySelector('#C')
const question = document.querySelector('.question')
const backBtn = document.querySelector('.home')
const rules = document.querySelector('.rules')
const modal = document.querySelector('.modal')
const noModal = document.querySelector('.noModal')
const close = document.querySelectorAll('#close')
const nuclear = document.querySelector('.nuclear')
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

    let questions2 = [
    
        {
            question: "Of which house was John Snow born?",
            a: 'Targaryen',
            b: 'Sand',
            c: 'Stark',
            
            correctAnswer: 'a'
        },
        {
            question: "How many children of the house Baratheon Lived?",
            
            a: '8',
            b: '5',
            c: '1'
            ,
            correctAnswer: 'c'
        },
        {
            question: "A _____ always repays their debts?",
                a: 'Lannister',
                b: 'Targaryen',
                c: 'Stark'
            ,
            correctAnswer: 'a'

        },
        {
            question: 'Which member of which House trained on the Island of Bravos?',
                a: 'Aria, of House Stark',
                b: 'Sam, of House Tully', 
                c: 'Lyanna, of House Mormont',
          
          correctAnswer: 'a'      
        },
        {
            question: 'Which Member/s of House Lannister killed themselves?',
                a: 'Joffrey, Tywin',
                b: 'Tommen', 
                c: 'Jaimie',
          
          correctAnswer: 'b'      
        },
    ];

    let questions3 = [
    
        {
            question: "How did John Snow return in the books",
            a: 'Warg into a wolf',
            b: 'Come back to life',
            c: 'Never Returned',
            
            correctAnswer: 'a'
        },
        {
            question: "Which Stark child/children could warg in the books",
            
            a: 'Aria,Bran, Robb',
            b: 'Sansa, Rickon',
            c: 'All of them'
            ,
            correctAnswer: 'c'
        },
        {
            question: "What season/episode did the Battle of the Bastards take place?",
                a: 'Season 6 : Episode 9',
                b: 'Season 5 : Episode 7',
                c: 'Season 7 : Episode 3'
            ,
            correctAnswer: 'a'

        },
        {
            question: 'What season/episode did Aria train with Brienne of Tarth?',
                a: 'Season 7: Episode 4',
                b: 'Season 5: Episode 3', 
                c: 'Season 6: Episode 9',
          
          correctAnswer: 'a'      
        },
        {
            question: 'What season/episode did the purple wedding take place?',
                a: 'Season 4: Episode 8',
                b: 'Season 4: Episode 2', 
                c: 'Season 6: Episode 2',
          
          correctAnswer: 'b'      
        },
    ];
// We need a way to stop the questions from appearing
const finalQuestion = questions.length - 1;



// need a way to keep track of the current question

let currentQuestion = 0;

const showQuestion = () => {
    Array.from(document.querySelectorAll('.choice')).forEach(q => q.addEventListener('click', checkAnswer))
    // this goes through the questions
    let q = questions[currentQuestion]
    // sets the question up on the page
    gameStart.style.display = 'block'
    question.innerHTML = "<div>"+ q.question +"</div>";
    question.classList.add('questions')
    // gives you choice A:
    choiceA.innerText =  q.a 
    // choice B:
    choiceB.innerText = q.b
    // choice C:
    choiceC.innerText = q.c
    // this removes the regular game menu 
    section.style.display = 'none';
    option.style.display = 'none';
    nuclear.style.display = 'block'

}

const showQuestion2 = () => {
    Array.from(document.querySelectorAll('.choice')).forEach(q => q.addEventListener('click', checkAnswer2))
    gameStart.style.display = 'block'
    let q2 = questions2[currentQuestion]
    
    question.innerHTML = "<p>"+ q2.question +"</p>";
    question.classList.add('questions')
    choiceA.innerText = q2.a
    choiceB.innerText = q2.b
    choiceC.innerText = q2.c
    section.style.display = 'none';
    option.style.display = 'none';
    }

const showQuestion3 = () => 
{

    Array.from(document.querySelectorAll('.choice')).forEach(q => q.addEventListener('click', checkAnswer3))
    gameStart.style.display = 'block'
    let q3 = questions3[currentQuestion]
    
    question.innerHTML = "<p>"+ q3.question +"</p>";
    question.classList.add('questions')
    choiceA.innerText = q3.a
    choiceB.innerText = q3.b
    choiceC.innerText = q3.c
    section.style.display = 'none';
    option.style.display = 'none';
}
    

// Check answer function:
function checkAnswer(ev)  {
   
    let q = questions[currentQuestion]
    if(q.correctAnswer == ev.target.id.toLowerCase() ){
    modal.style.display = 'block'
    if(currentQuestion < finalQuestion){
    currentQuestion++
    showQuestion()
    } }  
    else 
    {
    noModal.style.display = 'block'
    }
    
    } 


function checkAnswer2(ev) {
   
    let q2 = questions2[currentQuestion]
    if(q2.correctAnswer == ev.target.id.toLowerCase()){
        modal.style.display = 'block'
        if(currentQuestion < finalQuestion){
        currentQuestion++
        showQuestion2()
    }
    }
    else {
        noModal.style.display = 'block'
        
    }
    
}

function checkAnswer3(ev) {
    let q3 = questions3[currentQuestion]
    console.log(q3, ev.target.id.toLowerCase())
    if(q3.correctAnswer == ev.target.id.toLowerCase()){
        modal.style.display = 'block'
        if(currentQuestion < finalQuestion){
        currentQuestion++
        showQuestion2()
        }
    }
    else {
        noModal.style.display = 'block'
        }
}
// new functionality
function showOptions(ev){
    ev.preventDefault()
    option.style.display = 'block'
    section.style.display = 'none'
    nuclear.style.display = 'flex'
}

const showRules = () => {
    rules.style.display = 'flex';
    rules.style.textAlign = "center"
    option.style.display = 'none';
    section.style.display = 'none';
    nuclear.style.display = 'flex'
}

const closeModal = () => {
    modal.style.display = 'none'
    noModal.style.display = 'none'
};


close.forEach(close => close.addEventListener('click', closeModal))
playBtn.addEventListener('click', showOptions)
dragonBtn.addEventListener('click', showQuestion)
houseBtn.addEventListener('click', showQuestion2)
bkShowBtn.addEventListener('click', showQuestion3)
rulesBtn.addEventListener('click', showRules)