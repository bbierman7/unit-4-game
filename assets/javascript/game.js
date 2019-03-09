$(document).ready(function() {

var wins = 0;
var losses = 0;
var randomNum = 0;
var totalScore = 0;
var restartGame;


//Generate random number and output it to text where Random Number is
function randomNumGen() {
    randomNum=(Math.floor(Math.random() * (102)+ 19)
    )};

$("#randomNum").appemd(randomNum);

function randomCrystalGen() {
    randomCrys=(Math.floor(Math.random() * (12)+ 1)
    )
    $("#crystalBtn1").click(function(){
        $(this).append(randomCrys);
        console.log(this)
    });
};



   
});
