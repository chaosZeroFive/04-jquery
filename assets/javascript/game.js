// JavaScript Document


//$(document).ready(function(){
    //console.log("Ready!");

//player clicks "let's Play"
//generate all the random numbers using the same function with different parameters
//generate random number between 19-120 for #game-number element
var gameNum = randomNum(19, 120);
//generate random number between 1-12 for #crystal-blue object
var blueNum = randomNum(1, 20);
var blue = parseInt(blueNum);
    console.log("blueNum is not a number? " + isNaN(blueNum));
//generate random number between 1-12 for #crystal-green object
var greenNum = randomNum(1, 20);
var green = parseInt(greenNum);
    console.log("greenNum is not a number? " + isNaN(greenNum));
//generate random number between 1-12 for #crystal-orange object
var orangeNum = randomNum(1, 20);
//generate random number between 1-12 for #crystal-purple object
var purpleNum = randomNum(1, 20);

var totalScore = 0;    
    console.log("total is not a number? " + isNaN(totalScore));
function randomNum(minVal, maxVal){
    return Math.floor(Math.random()*(maxVal-minVal+1)+minVal);
}

//check logic in console for #game-number element
console.log("gameNum value: " + gameNum);
//set html element text
document.getElementById("game-number").innerHTML = gameNum;
//check logic in console for #crystal-... object
console.log("blueNum value: " + blueNum);
console.log("greenNum value: " + greenNum);
console.log("orangeNum value: " + orangeNum);
console.log("purpleNum value: " + purpleNum);
//log all numbers are generated
console.log("All the numbers are generated!")

//player clicks a crystal that will add a number to the player's score counter
//----need a click event that adds the total of the crystals the player clicked
function clickCrystal(a, b){
    return a + b;
}

//to win the sum of the crystals clicked will match the random number

//to lose the sum of the crystals clicked will be greater than the random number

//win or loss counter is updated

//game restarts on win or lose
//----generate random number between 19-120 for #game-number object
//----generate random number between 1-12 for #crystal-blue object
//----generate random number between 1-12 for #crystal-green object
//----generate random number between 1-12 for #crystal-orange object
//----generate random number between 1-12 for #crystal-purple object
//});