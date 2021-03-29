var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector("#title");
var textFieldEl = document.querySelector("#text-field");
var optionsEl = document.querySelector("#options")
var beginEl = document.querySelector("#begin");
var resultEl = document.querySelector("#result");

var secondsLeft = 11;
var playerScore = 0;

var answerListEl = document.createElement("ol")

var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")

var choice1 = document.createElement("button")
var choice2 = document.createElement("button")
var choice3 = document.createElement("button")
var choice4 = document.createElement("button")

li1.appendChild(choice1)
li2.appendChild(choice2)
li3.appendChild(choice3)
li4.appendChild(choice4)

answerListEl.appendChild(li1)
answerListEl.appendChild(li2)
answerListEl.appendChild(li3)
answerListEl.appendChild(li4)

function timerStart() {
    var interval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(interval);
            alert("Time's up!")
            showScore();
        }
    }, 1000)

}

var question1 = {
    question: "What color is the sky?",
    answer1: "green",
    // correct:
    answer2: "blue",
    answer3: "yellow",
    answer4: "pink",
}

var question2 = {
    question: "Which of the following is not a state capital?",
    answer1: "Columbus",
    answer2: "Olympia",
    // correct:
    answer3: "Los Angeles",
    answer4: "Tallahassee",
}

var question3 = {
    question: "What is the population of Seattle (approximate, in thousands?",
    // correct:
    answer1: "775",
    answer2: "700",
    answer3: "800",
    answer4: "825",
}

var question4 = {
    question: "Do you believe in a thing called love?",
    answer1: "yes",
    answer2: "no",
    answer3: "I don't know",
    // correct:
    answer4: "We'll be rockin' 'til the sun goes down",
}

beginEl.addEventListener("click", function () {
    timerStart();
    beginEl.setAttribute("visibility", "hidden");
    questionOne();
})

function questionOne() {
    textFieldEl.textContent = question1.question;
    optionsEl.appendChild(answerListEl);
    choice1.textContent = question1.answer1;
    choice2.textContent = question1.answer2;
    choice3.textContent = question1.answer3;
    choice4.textContent = question1.answer4;

    choice1.addEventListener("click", function () {
        secondsLeft-2;
        questionTwo();
    })
    choice2.addEventListener("click", function () {
        playerScore++;
        questionTwo();
        console.log(playerScore);
    })
    choice3.addEventListener("click", function () {
        secondsLeft-2;
        questionTwo();
    })
    choice4.addEventListener("click", function () {
        secondsLeft-2;
        questionTwo();
    })

}

function questionTwo() {
    textFieldEl.textContent = question2.question;
    choice1.textContent = question2.answer1;
    choice2.textContent = question2.answer2;
    choice3.textContent = question2.answer3;
    choice4.textContent = question2.answer4;

    choice1.addEventListener("click", function () {
        secondsLeft-2;
        questionThree();
    })
    choice2.addEventListener("click", function () {
        secondsLeft-2;
        questionThree();
    })
    choice3.addEventListener("click", function () {
        playerScore++;
        console.log(playerScore);
        questionThree();
    })
    choice4.addEventListener("click", function () {
        secondsLeft-2;
        questionThree();
    })

}

function questionThree() {
    textFieldEl.textContent = question3.question;
    choice1.textContent = question3.answer1;
    choice2.textContent = question3.answer2;
    choice3.textContent = question3.answer3;
    choice4.textContent = question3.answer4;

    choice1.addEventListener("click", function () {
        playerScore++;
        console.log(playerScore);
        questionFour();
    })
    choice2.addEventListener("click", function () {
        secondsLeft-2;
        questionFour();
    })
    choice3.addEventListener("click", function () {
        secondsLeft-2;
        questionFour();
    })
    choice4.addEventListener("click", function () {
        secondsLeft-2;
        questionFour();
    })

}

function questionFour() {
    textFieldEl.textContent = question4.question;
    choice1.textContent = question4.answer1;
    choice2.textContent = question4.answer2;
    choice3.textContent = question4.answer3;
    choice4.textContent = question4.answer4;

    choice1.addEventListener("click", function () {
        secondsLeft-2;
        showScore();
    })
    choice2.addEventListener("click", function () {
        secondsLeft-2;
        showScore();
    })
    choice3.addEventListener("click", function () {
        secondsLeft-2;
        showScore();
    })
    choice4.addEventListener("click", function () {
        playerScore++;
        console.log(playerScore);
        showScore();
    })

    
}

function showScore() {
    titleEl.textContent = "Final Score";
    textFieldEl.textContent = playerScore;
    optionsEl.remove();
    document.appendChild(beginEl)
    beginEl.textContent = "Play again"
    timerEl.remove();
}

