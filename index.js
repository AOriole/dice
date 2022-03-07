// #########   Player 1   ###############

// S1 - set a var to randNum & chk it working
var randNum1 = Math.floor( Math.random()*6) +1;   // change range form (0,5) to (1,6) i.e. scaling & get an int, not float

//alert('Dice roll = '+randomNum1);

// S2 - select random dice img & assig it to left side/ player1     | by concat
var randDiceImg = "dice" + randNum1 + ".png";         // select   | imgName + randNum + imgExtension
var randImgSrc = "images/" + randDiceImg;               // assign   & include the path e.g images/dice1.png to dice6.png

// S3 - change element attrib to dynamically change the static img src in index.html via DOM using js
var img1 = document.querySelectorAll("img")[0];            // select all html-elements matching & then return first image
img1.setAttribute("src", randImgSrc);                      // change images (roll dice) by randomisation ---> dynamic


// #########   Player 2    ###############

var randNum2 = Math.floor(Math.random()*6) +1;

var randImgSrc2 = "images/dice" + randNum2 + ".png";

var img2 = document.querySelectorAll('img')[1].setAttribute("src", randImgSrc2);


// ANNOUNCE WINNERS on dice roll
if(randNum1 > randNum2)
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
else if(randNum2 > randNum1)
    document.querySelector("h1").innerHTML = "🚩 Player 2 Won";
else
    document.querySelector("h1").innerHTML = "DRAW!";


