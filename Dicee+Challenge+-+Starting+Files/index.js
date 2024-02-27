//  set src image attribute of first dice
var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var newSrc = 'images/dice' + randomNumber1 + '.png' 
document.querySelectorAll('.dice')[0].querySelector('img').setAttribute('src', newSrc)

//  set src image attribute of second dice
var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var newSrc = 'images/dice' + randomNumber2 + '.png' 
document.querySelectorAll('.dice')[1].querySelector('img').setAttribute('src', newSrc)

if (randomNumber1 > randomNumber2){

    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins";

}else if (randomNumber2 > randomNumber1){

    document.querySelector('h1').innerHTML = "Player 2 Wins 🚩";

} else{

    document.querySelector('h1').innerHTML = "Draw";

}




