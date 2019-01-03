// JavaScript Document
//declarations
$(document).ready(function () {
    console.log("ready!");
    $(".alert-warning").hide();
    $(".alert-success").hide();
    $("#crystal-blue").hide();
    $("#crystal-green").hide();
    $("#crystal-orange").hide();
    $("#crystal-purple").hide();
    var randomNumber = 0,
        blueVal = 0,
        greenVal = 0,
        orangeVal = 0,
        purpleVal = 0,
        score = 0,
        wins = 0,
        loss = 0;
});

//player clicks the Let's Play button to begin the game
function playGame() {
    $("#lets-play").hide();
    randomNumber = parseInt(Math.floor(Math.random() * 120) + 19);
    $("#game-number").html(randomNumber);
    console.log("This is the value of randomNumber: " + randomNumber);
    
    blueVal = parseInt(Math.floor(Math.random() * 12) + 1);
    console.log("This is the value of blueVal: " + blueVal);
    
    greenVal = parseInt(Math.floor(Math.random() * 12) + 1);
    console.log("This is the value of greenVal: " + greenVal);
    
    orangeVal = parseInt(Math.floor(Math.random() * 12) + 1);
    console.log("This is the value of orangeVal: " + orangeVal);
    
    purpleVal = parseInt(Math.floor(Math.random() * 12) + 1);
    console.log("This is the value of purpleVal: " + purpleVal);
    
    score = 0;
    $("#score").html(0);
    console.log("This is the value of score: " + score);
    
    wins = 0;
    $("#wins").html(0);
    console.log("This is the initial value of wins: " + wins);
    
    loss = 0;
    $("#losses").html(0);
    console.log("This is the initial value of losses: " + loss);
    
    $("#crystal-blue").show();
    $("#crystal-green").show();
    $("#crystal-orange").show();
    $("#crystal-purple").show();
}

$("#crystal-blue").click(function () {
    if (score > randomNumber) {
        gameLose();
    }
    else if (randomNumber === score) {
        gameWin();
    }
    else {
        console.log("The Player's score before the click is " + score);
        console.log("You Clicked Blue with a value of " + blueVal);
        score += blueVal;
        console.log("The players's score is now " + score);
        $("#score").html(score);
    }
});

$("#crystal-green").click(function () {
    if (score > randomNumber) {
        gameLose();
    }
    else if (randomNumber === score) {
        gameWin();
    }
    else {
        console.log("The Player's score before the click is " + score);
        console.log("You Clicked Green with a value of " + greenVal);
        score += greenVal;
        console.log("The players's score is now " + score);
        $("#score").html(score);
    }
});

$("#crystal-orange").click(function () {
    if (score > randomNumber) {
        gameLose();
    }
    else if (randomNumber == score) {
        gameWin();
    }
    else {
        console.log("The Player's score before the click is " + score);
        console.log("You Clicked Orange with a value of " + orangeVal);
        score += orangeVal;
        console.log("The players's score is now " + score);
        $("#score").html(score);
    }
});

$("#crystal-purple").click(function () {
    if (score > randomNumber) {
        gameLose();
    }
    else if (randomNumber == score) {
        gameWin();
    }
    else {
        console.log("The Player's score before the click is " + score);
        console.log("You Clicked Purple with a value of " + purpleVal);
        score += purpleVal;
        console.log("The players's score is now " + score);
        $("#score").html(score);
    }
});

function gameLose() {
    console.log("Player Lost");
    $(".alert-success").hide();
    $(".alert-warning").show();
    $(".alert-warning").html("You Lost...");
    $(".alert-success").html("");
    loss++;
    $("#losses").html(loss);
    $(".alert-warning").show();
    resetGame();
}

function gameWin() {
    console.log("Player Won");
    $(".alert-warning").hide();
    $(".alert-success").show();
    $(".alert-warning").html("");
    $(".alert-success").html("You Won!");
    wins++;
    $("#wins").html(wins);
    $(".alert-success").show();
    resetGame();
}

function resetGame(){
    console.clear();
    randomNumber = parseInt(Math.floor(Math.random() * 120) + 19);
    blueVal = parseInt(Math.floor(Math.random() * 12) + 1);
    greenVal = parseInt(Math.floor(Math.random() * 12) + 1);
    orangeVal = parseInt(Math.floor(Math.random() * 12) + 1);
    purpleVal = parseInt(Math.floor(Math.random() * 12) + 1);
    score = 0;
    $("#score").html(score);
    $("#game-number").html(randomNumber);
    console.log("from reset() | This is the value of randomNumber: " + randomNumber);
    console.log("from reset() | This is the value of blueVal: " + blueVal);
    console.log("from reset() | This is the value of greenVal: " + greenVal);
    console.log("from reset() | This is the value of orangeVal: " + orangeVal);
    console.log("from reset() | This is the value of purpleVal: " + purpleVal);
    console.log("from reset() | This is the value of score: " + score);
}
    //$(".alert-warning").hide();
    //$(".alert-success").hide();