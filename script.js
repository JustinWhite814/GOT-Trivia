const dragonBtn = document.querySelector('.dragon')
const houseBtn =  document.querySelector('.houses')
const bkShowBtn = document.querySelector('.bookshow')
const playBtn =   document.querySelector('.play')
const option =    document.querySelector('.options')
const rulesBtn =  document.querySelector('.info')
const gameStart = document.querySelector('.game')
const choiceA  =  document.querySelector('#A')
const choiceB  =  document.querySelector('#B')
const choiceC  =  document.querySelector('#C')
const question =  document.querySelector('.question')
const backBtn =   document.querySelector('.home')
const rules   =   document.querySelector('.rules')
const modal   =   document.querySelector('.modal')
const noModal =   document.querySelector('.noModal')
const close   =   document.querySelectorAll('#close')
const nuclear =   document.querySelector('.nuclear')
const section =   document.querySelector('section')
let i = 0;
let type = 'Welcome to Game Of Thrones Trivia!';
let speed = 100;
let rule = "The rules are pretty simple. You have 3 categories to choose from. Once you choose from said categories you’ll be led to questions. You cannot move on from the question until you get it right." ;
let currentQuestion = 0;
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
        
        a: 'Viscerion',
        b: 'Drogon',
        c: 'Rhaegal'
        ,
        correctAnswer: 'a'
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
        
        a: '1',
        b: '7',
        c: '3'
        ,
        correctAnswer: 'a'
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
// I wanted to use 3 different questions arrays.
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
        
        a: 'All of them',
        b: 'Sansa, Rickon',
        c: 'Aria,Bran, Robb'
        ,
        correctAnswer: 'a'
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


// this is my refactored code
function refactoredShowQuestion(currentQuestions) {
    const questionEl = document.querySelector('.question')
    // learned From Aaron Cordova:
    function eventListener(e) { 
        let q = currentQuestions[currentQuestion]
        if (q.correctAnswer == e.target.id.toLowerCase()) {
            modal.style.display = 'block'
            if (currentQuestion < currentQuestions.length - 1) {
            currentQuestion++
            // this function stops the event listener from adding on new ones everytime it is clicked
            this.removeEventListener('click', eventListener)
            refactoredShowQuestion(currentQuestions)
        }} 
        else 
        {
            noModal.style.display = 'block'
        }
    }
    // takes all of my arrays and loops through them, passes them the values they want
    Array.from(document.querySelectorAll('.choice')).forEach(q => q.addEventListener('click', eventListener))
    let q = currentQuestions[currentQuestion]
    // dom manipulation, constantly writing over the same block of code.
    gameStart.style.display = 'block'
    questionEl.innerHTML = "<div>"+ q.question +"</div>"
    questionEl.classList.add('questions')
    choiceA.innerText = q.a 
    choiceB.innerText = q.b
    choiceC.innerText = q.c
    // this removes the regular game menu 
    section.style.display = 'none';
    option.style.display =  'none';
    nuclear.style.display = 'block';
}


// new functionality
// unhides the options/categories
function showOptions(ev){
    ev.preventDefault()
    option.style.display = 'block'
    section.style.display = 'none'
    nuclear.style.display = 'flex'
}
// this unhides the rules from the page
const showRules = () => {
    rules.style.display = 'flex';
    option.style.display = 'none';
    section.style.display = 'none';
    nuclear.style.display = 'flex'
}
// function for closing the modal
const closeModal = () => {
    modal.style.display = 'none'
    noModal.style.display = 'none'
}
// function that creates the typing effect:
function typer() {
    if(i < type.length, i <rule.length){
        document.getElementById('type').innerHTML += type.charAt(i);
        document.getElementById('rules').innerHTML += rule.charAt(i)
    
        i++;
        setTimeout(typer, speed);
    }
}
typer()
close.forEach(close => close.addEventListener('click', closeModal))
playBtn.addEventListener('click', showOptions)
rulesBtn.addEventListener('click', showRules)
dragonBtn.addEventListener('click', () => refactoredShowQuestion(questions))
houseBtn.addEventListener('click', () => refactoredShowQuestion(questions2))
bkShowBtn.addEventListener('click', () => refactoredShowQuestion(questions3))