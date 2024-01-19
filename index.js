var randomNumber=Math.floor(Math.random()*6)+1;

var randomDice="dice" +randomNumber + ".png";//from dice1.png to dice6.png;
 
var randomImg="images/"+randomDice; // images/dic1.png to images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomImg);

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice1="dice" +randomNumber1 + ".png";
var randomImg1="images/"+randomDice1; 
document.querySelectorAll("img")[1].setAttribute("src",randomImg1);

if(randomDice>randomDice1){
    document.querySelector("p").innerHTML="Player 1 Won..!!";
}else if(randomDice<randomDice1){
    document.querySelector("p").innerHTML="Player 2 won..!!";
}
else{
    document.querySelector("p").innerHTML="Its A Draw..!!"
}