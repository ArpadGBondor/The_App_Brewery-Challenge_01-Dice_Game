var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

var header = document.querySelector("h1");

if (randomNumber1 < randomNumber2)
  header.innerHTML = "Player2 Wins! <span class='flag'>🚩</span>";
else if (randomNumber1 > randomNumber2)
  header.innerHTML = "<span class='flag'>🚩</span> Player 1 wins!";
else
  header.innerHTML = "Draw!";
