var timer;
var highscore = 0;
var remainingTime = 0;
var CurrentNumber = -1;
var answer;
var choice;

var questions = [
    {
        question: "Where is the best place to link your javascript file inside of your HTML?",
        options: ["Inside the Head Tag","Last Spot in the Body Tag","Inside the Meta Tag","Inside the CSS File"],
        answer: "Last Spot in the Body Tag"
    },

    {
        question: "What is the shortest way to get started writing an HTML file?",
        options: ["Typing in 'HTML5' in VS Code", "Praying","Copying and Pasting a previous code block","There is no shortcut"],
        answer: "Typing in 'HTML5' in VS Code"
    },

    {
        question: "What does the command '.push' do to variables?",
        options: ["pushes your sibling off a cliff", "makes websites look cool","makes your CSS mobile frinedly","pushes data from one array and adds it to another"],
        answer: "pushes data from one array and adds it to another"
    },

    {
        question: "What symbol is needed in order to properly declare an array?",
        options: ["A question mark", "an exclamation point","square brackets","curly brackets"],
        answer: "pushes data from one array and adds it to another"
    },

    {
        question: "What is the correct command in git to push a branch update?",
        options: [" git push origin branch", "git commit -m","git pull origin branch","git add ."],
        answer: "git push origin branch"
    }
]

var StartGame = function() {
    remainingTime = 75;
    document.getElementById("timer").innerHTML = remainingTime;

    CountDown();
}

var CountDown = function() {
    timer = setInterval(function() {
        remainingTime--;
        document.getElementById("timer").innerHTML = remainingTime;
        console.log(remainingTime);

        if (remainingTime ==0 || CurrentNumber == questions.length){
            GameOver();
        }

        else {
            Quiz();
        }
    }, 1000); 

}

var Quiz = function () {
    CurrentNumber ++;
    var QuestionBannerQuestion= "<h2>" + questions[CurrentNumber].question + "<h2";

    for (i =0; i <questions[CurrentNumber].options.length; i++) {
        
    }
    document.getElementById("Questions").innerHTML = QuestionBannerQuestion;

}

var GameOver = function() {
    clearInterval(remainingTime);
    var QuestionBanner = `<h2> Game Over </h2>`;
}