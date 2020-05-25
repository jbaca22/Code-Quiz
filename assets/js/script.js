var timer;
var highscore = 0;
var remainingTime = 0;
var questions = []

var StartGame = function() {
    remainingTime = 75;
    console.log(timer);
    document.getElementById("timer").innerHTML = remainingTime;

    timer = setInterval(function() {
        remainingTime--;
        document.getElementById("timer").innerHTML = remainingTime;
        //proceed to end the game function when timer is below 0 at any time
        if (remainingTime <= 0) {
            
        }
    }, 1000); 

}

var CountDown = function() {
    
}