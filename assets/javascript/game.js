// JavaScript Document

$(".alert-warning").hide();
$(".alert-success").hide();
var randomNumber = parseInt(Math.floor(Math.random() * 121) + 19);
    $("#game-number").html(randomNumber);

var blueVal = parseInt(Math.floor(Math.random() * 13) + 1);

var greenVal = parseInt(Math.floor(Math.random() * 13) + 1);

var orangeVal = parseInt(Math.floor(Math.random() * 13) + 1);

var purpleVal = parseInt(Math.floor(Math.random() * 13) + 1);

var score = 0;

var wins = 0;

var loss = 0;

console.log("This is the value of randomNumber: " + randomNumber);
console.log("This is the value of blueVal: " + blueVal);
console.log("This is the value of greenVal: " + greenVal);
console.log("This is the value of orangeVal: " + orangeVal);
console.log("This is the value of purpleVal: " + purpleVal);
console.log("This is the value of score: " + score);


        $("#crystal-blue").click(function () {
            if (score < randomNumber){
                console.log("The Player's score before the click is " + score);
                console.log("You Clicked Blue with a value of " + blueVal);
                score += blueVal;
                console.log("The players's score is now " + score);
                $("#score").html(score);
            }
            if (randomNumber === score) {
                gameWin();
            }
            if (score > randomNumber) {
                gameLose();
            }

        });

        $("#crystal-green").click(function () {
            if (score < randomNumber){
                console.log("The Player's score before the click is " + score);
                console.log("You Clicked Green with a value of " + greenVal);
                score += greenVal;
                console.log("The players's score is now " + score);
                $("#score").html(score);
            }
            if (randomNumber === score) {
                gameWin();
            }
            if (score > randomNumber) {
                gameLose();
            }
        });

        $("#crystal-orange").click(function () {
            if (score < randomNumber){
                console.log("The Player's score before the click is " + score);
                console.log("You Clicked Orange with a value of " + orangeVal);
                score += orangeVal;
                console.log("The players's score is now " + score);
                $("#score").html(score);
            }
            if (randomNumber === score) {
                gameWin();
            }
            if (score > randomNumber) {
                gameLose();
            }
        });

        $("#crystal-purple").click(function () {
            if (score < randomNumber){
                console.log("The Player's score before the click is " + score);
                console.log("You Clicked Purple with a value of " + purpleVal);
                score += purpleVal;
                console.log("The players's score is now " + score);
                $("#score").html(score);
            }
            if (randomNumber === score) {
                gameWin();
            }
            if (score > randomNumber) {
              gameLose();
            }
        });
function gameWin() {
        $(".alert-success").html("You Won!");
        wins + 1;
        $("#wins").html(wins);
        $(".alert-success").show();
        resetGame();
}

function gameLose() {
        $(".alert-warning").html("You Lost...");
        loss + 1;
        $("#wins").html(loss);
        $(".alert-warning").show();
        resetGame();
}
function resetGame() {
    $("#score").html(0);
    $(".alert-warning").hide();
    $(".alert-success").hide();
    var randomNumber = parseInt(Math.floor(Math.random() * 121) + 19);
    var blueVal = parseInt(Math.floor(Math.random() * 13) + 1);
    var greenVal = parseInt(Math.floor(Math.random() * 13) + 1);
    var orangeVal = parseInt(Math.floor(Math.random() * 13) + 1);
    var purpleVal = parseInt(Math.floor(Math.random() * 13) + 1);
    var score = 0;
    $("#game-number").html(randomNumber);
    $("#score").html(0);
    console.log("This is the value of randomNumber: " + randomNumber);
    console.log("This is the value of blueVal: " + blueVal);
    console.log("This is the value of greenVal: " + greenVal);
    console.log("This is the value of orangeVal: " + orangeVal);
    console.log("This is the value of purpleVal: " + purpleVal);
    console.log("This is the value of score: " + score);
}