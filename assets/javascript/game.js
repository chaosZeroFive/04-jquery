// JavaScript Document
//on document ready logs "ready", hides crystals, and variable declarations
$(document).ready(function () {
    console.log("ready!");
    $('.crystalButton').hide();
    var randomNumber = 0,
        blueVal = 0,
        greenVal = 0,
        orangeVal = 0,
        purpleVal = 0,
        score = 0,
        wins = 0,
        loss = 0;
});

var lastGame = {
    gameNumber: 0,
    blueNumber: 0,
    greenNumber: 0,
    orangeNumber: 0,
    purpleNumber: 0,
    totalScore: 0
    
}

//player clicks the Let's Play button to begin the game
//unhides crystals, hides the instructions / gif, 
function playGame() {
    genRandom();
    
    $("#lets-play").hide();
    
    $('#mainDiv').hide();
    
    $('.crystalButton').show();
    //set score to zero
    score = 0;
    $("#score").html(0);
    console.log("This is the value of score: " + score);
    //set wins to zero
    wins = 0;
    $("#wins").html(0);
    console.log("This is the initial value of wins: " + wins);
    //set losses to zero
    loss = 0;
    $("#losses").html(0);
    console.log("This is the initial value of losses: " + loss); 
}

//generates random numbers for game and crystals
function genRandom(){
    randomNumber = parseInt(Math.floor(Math.random() * 120) + 19);
    console.log("This is the value of randomNumber: " + randomNumber);
    lastGame.gameNumber = randomNumber;
    $("#game-number").html(randomNumber);
    
    blueVal = parseInt(Math.floor(Math.random() * 12) + 1);
    lastGame.blueNumber = blueVal;
    console.log("This is the value of blueVal: " + blueVal);
    
    greenVal = parseInt(Math.floor(Math.random() * 12) + 1);
    lastGame.greenNumber = greenVal;
    console.log("This is the value of greenVal: " + greenVal);
    
    orangeVal = parseInt(Math.floor(Math.random() * 12) + 1);
    lastGame.orangeNumber = orangeVal;
    console.log("This is the value of orangeVal: " + orangeVal);
    
    purpleVal = parseInt(Math.floor(Math.random() * 12) + 1);
    lastGame.purpleNumber = purpleVal;
    console.log("This is the value of purpleVal: " + purpleVal);
}
$("#btnBlue").on('click', function() {
    console.log("Player Clicked Blue with a Value of: " + blueVal);
    score += blueVal;
    if (score === randomNumber){
        gameWin();
    }
    else if (score > randomNumber){
        gameLose();
    }
    else {
        console.log("Score is now: " + score);
        $('#scoreElement').html(score);
    }
});
$("#btnGreen").on('click', function() {
    console.log("Player Clicked Green with a Value of: " + greenVal);
    score += greenVal;
    if (score === randomNumber){
        gameWin();
    }
    else if (score > randomNumber){
        gameLose();
    }
    else {
        console.log("Score is now: " + score);
        $('#scoreElement').html(score);
    }
});
$("#btnOrange").on('click', function() {
    console.log("Player Clicked Orange with a Value of: " + orangeVal);
    score += orangeVal;
    if (score === randomNumber){
        gameWin();
    }
    else if (score > randomNumber){
        gameLose();
    }
    else {
        console.log("Score is now: " + score);
        $('#scoreElement').html(score);
    }
});
$("#btnPurple").on('click', function() {
    console.log("Player Clicked Purple with a Value of: " + purpleVal);
    score += purpleVal;
    if (score === randomNumber){
        gameWin();
    }
    else if (score > randomNumber){
        gameLose();
    }
    else {
        console.log("Score is now: " + score);
        $('#scoreElement').html(score);
    }
});

function gameLose() {
    var audio = document.getElementById('audioLose');
    audio.play();
    copyLast();
    
    console.log("Player Lost");
    loss++;
    $("#losses").html(loss);
    resetGame();
    $('#smallWon').html('');
    $('#smallLoss').html('You Lost the Last Game!');
}

function gameWin() {
    var audio = document.getElementById('audioWin');
    audio.play();
    copyLast();
    console.log("Player Won");
    wins++;
    $("#wins").html(wins);
    resetGame();
    $('#smallLoss').html('');
    $('#smallWon').html('You Won the Last Game!');
}

function copyLast(){
    lastGame.gameNumber = randomNumber;
    lastGame.blueNumber = blueVal;
    lastGame.greenNumber = greenVal;
    lastGame.orangeNumber = orangeVal;
    lastGame.purpleNumber = purpleVal;
}

function resetGame(){
    console.clear();
    console.log("Last Game | randomNumber: " + lastGame.gameNumber);
    console.log("Last Game | blueVal: " + lastGame.blueNumber);
    console.log("Last Game | greenVal: " + lastGame.gameNumber);
    console.log("Last Game | orangeVal: " + lastGame.orangeNumber);
    console.log("Last Game | purpleVal: " + lastGame.purpleNumber);
    console.log("*********************************")
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