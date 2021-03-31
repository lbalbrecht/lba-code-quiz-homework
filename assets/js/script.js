var timerEl = document.querySelector("#timer");
var contentEl = document.querySelector(".content");
var titleEl = document.querySelector("#title");
var textFieldEl = document.querySelector("#text-field");
var answerListEl = document.querySelector("#options")
var beginEl = document.querySelector("#begin");
var resultEl = document.querySelector("#result");
var highScoreEl = document.createElement("button")
var submitScoreEl = document.createElement("button")

var secondsLeft = 10;
var playerScore = 0;

function timerStart() {
    interval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(interval);
            alert("Time's up!")
            showScore();
        }

    }, 1000)

}

var questionsArray = [{
    question: "What color is the sky?",
    answer1: "green",
    answer2: "blue",
    answer3: "yellow",
    answer4: "pink",
    correct: "blue",
},

{
    question: "Which of the following is not a state capital?",
    answer1: "Columbus",
    answer2: "Olympia",
    answer3: "Los Angeles",
    answer4: "Tallahassee",
    correct: "Los Angeles",
},

{
    question: "What is the population of Seattle (approximate, in thousands?",
    answer1: "775",
    answer2: "700",
    answer3: "800",
    answer4: "825",
    correct: "775",
},

{
    question: "Do you believe in a thing called love?",
    answer1: "yes",
    answer2: "no",
    answer3: "I don't know",
    answer4: "We'll be rockin' 'til the sun goes down",
    correct: "We'll be rockin' 'til the sun goes down",
}]

var currentIndex = 0
var choice1 = document.querySelector("#choice1")
var choice2 = document.querySelector("#choice2")
var choice3 = document.querySelector("#choice3")
var choice4 = document.querySelector("#choice4")
var answerBtn = document.querySelectorAll(".btn")

beginEl.addEventListener("click", function () {
    timerStart();
    playerScore = 0;
    secondsLeft = 10;
    currentIndex = 0;
    timerEl.setAttribute("style", "visibility:visible");
    answerListEl.setAttribute("style", "visibility:visible");
    beginEl.setAttribute("style", "display:none");
    submitScoreEl.setAttribute("style", "visibility:hidden");
    highScoreEl.setAttribute("style", "visibility:hidden");
    startQuiz();
})

function startQuiz() {
    textFieldEl.textContent = questionsArray[currentIndex].question;
    choice1.textContent = questionsArray[currentIndex].answer1;
    choice2.textContent = questionsArray[currentIndex].answer2;
    choice3.textContent = questionsArray[currentIndex].answer3;
    choice4.textContent = questionsArray[currentIndex].answer4;

}

answerBtn.forEach(function (ansBtn){
    ansBtn.addEventListener("click", function(event) {
        var userGuess = event.target.textContent;
        if (userGuess === questionsArray[currentIndex].correct) {
            playerScore++;
            currentIndex++;
            resultEl.textContent = "Correct!"
            resultEl.setAttribute("style", "visibility:visible")
            console.log(playerScore)
        }
        else {
            currentIndex++;
            secondsLeft -= 2;
            resultEl.textContent = "Incorrect!"
            resultEl.setAttribute("style", "visibility:visible")
        }

        if (currentIndex >= questionsArray.length) {
            showScore();
        }
        startQuiz();
    })
})

function showScore() {
    titleEl.textContent = "Final Score";
    textFieldEl.textContent = playerScore + " points, " + secondsLeft + " seconds left";
    contentEl.appendChild(beginEl)
    beginEl.setAttribute("style", "visibility:visible");
    beginEl.textContent = "Play again"
    contentEl.appendChild(submitScoreEl)
    submitScoreEl.setAttribute("style", "visibility:visible");
    submitScoreEl.textContent = "Submit score"
    contentEl.appendChild(highScoreEl)
    highScoreEl.setAttribute("style", "visibility:visible");
    highScoreEl.textContent = "View high Scores"
    timerEl.remove();
    answerListEl.setAttribute("style", "display:none");
    clearInterval(interval)
}

// submitScoreEl.addEventListener("click", function(event) {

// })