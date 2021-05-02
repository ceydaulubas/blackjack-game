const win = document.getElementById("win");
const lose = document.getElementById("lose");

let numOfWins = JSON.parse(localStorage.getItem("wins"));
let numOfLoses = JSON.parse(localStorage.getItem("loses"));
let numOfDraws = JSON.parse(localStorage.getItem("draws"));

if (numOfWins === null) {
  win.innerHTML = "0";
} else {
  win.innerHTML = numOfWins;
}

if (numOfLoses === null) {
  lose.innerHTML = "0";
} else {
  lose.innerHTML = numOfLoses;
}
