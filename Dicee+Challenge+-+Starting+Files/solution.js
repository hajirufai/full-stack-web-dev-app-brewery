//  set src image attribute of first dice
var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesrc = "images/" + randomDiceImage;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomImagesrc);

//  set src image attribute of second dice
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesrc = "images/" + randomDiceImage;

var image2 = document.querySelectorAll('img')[1];
image1.setAttribute('src', randomImagesrc);


// Display results at h1
if (randomNumber1 > randomNumber2){

    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins";

}else if (randomNumber2 > randomNumber1){

    document.querySelector('h1').innerHTML = "Player 2 Wins 🚩";

} else{

    document.querySelector('h1').innerHTML = "Draw!";

}

