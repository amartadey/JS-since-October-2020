const data= [{
    question: "In Which country is LONDON located ?",
    options: ["United States of America" , "United Kingdom", "India"],
    correct: "United Kingdom"
},
{
    question: "What is the Capital of India ?",
    options: ["Delhi" , "Daman & Diu", "MG Road"],
    correct: "Delhi"
},

{
    question: "Which crop is sown on the largest area in India?",
    options: ["Rice" , "Wheat", "Maize"],
    correct: "Rice"
},
{
    question: "The first mechanical computer designed by Charles Babbage was called ?",
    options: ["Calculator" , " Processor", "Analytical Engine", "Abacus"],
    correct: "Analytical Engine"
},
{
    question: "Which of the following is the most powerful type of computer ?",
    options: ["Super–micro" , "Super conductor", "Super computer", "Megaframe"],
    correct: "Super computer"
},
{
    question: "Web pages are written using ?",
    options: ["FTP" , "HTTP", "HTML", "URL"],
    correct: "HTML"
},
];
var quizBlock = document.querySelector('.quiz-box');
var questionNumber = 0;
const askQuestion = ()=>{
    var question = document.querySelector('.quiz-box h2');
    
    if(questionNumber < data.length){
        question.innerHTML = data[questionNumber].question;
        var options="";
        data[questionNumber].options.forEach(element => {  
            options += `<input type="radio" id="${element.replace(/\s+/g, '-').toLowerCase()}" name="answer" value="${element}">
            <label for="${element.replace(/\s+/g, '-').toLowerCase()}">${element}</label><br>`
        });
       
        document.querySelector('#selectbxs').innerHTML = options;
        
        
    } else {
        document.querySelector('#title').style.display = "none";
        document.querySelector('.questions-block').style.display = "none";
        document.querySelector('.quiz-complete').style.display = "block";
    }

}
var button = document.querySelector('#answer-submit');
button.addEventListener('click', (e)=>{
    e.preventDefault();

    var selects = document.querySelectorAll('input');
    selects .forEach(element => {
        
        if(element.checked == true){
            if(element.value == data[questionNumber].correct ){
                questionNumber++;
                askQuestion();
            } else {
                quizBlock.classList.add("alert")
                button .classList.add("alert")
                setTimeout(() => {
                    quizBlock.classList.remove("alert")
                    button.classList.remove("alert")
                }, 1000);
                
            }
            
        }
    });
    
    
    
});
askQuestion()