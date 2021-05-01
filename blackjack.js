var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

class Card {
    constructor(suit, number) {
        this.suit = suits[suit];
        this.number = numbers[number];
        this.value = this.givePoint(number);
    }

    givePoint(number) {
        let value = 0;
        if (number === 0) {
            value = 11;
        } else if (number >= 10) {
            value = 10;
        } else {
            value = number + 1
        }
        return value;
    }
}

class Deck {
    constructor() {
        this.allCards = [];

        for (let suit = 0; suit < 4; suit++) {
            for (let number = 0; number < 13; number++) {
                let card = new Card(suit, number);
                this.allCards.push(card);
            }
        }

        let model = [];
        while (this.allCards.length > 0) {
            let randomNum = Math.floor(Math.random() * this.allCards.length);
            model.push(this.allCards[randomNum]);
            this.allCards.splice(randomNum, 1);
        }
        this.allCards = model;
    }
    giveOneCard() {
        return this.allCards.shift();
    }
}

class Player {
    constructor() {
        this.cards = [];
        this.values = 0;
        this.aces = 0;
        this.blackjack = false;
        this.faces = 0;
        // this.numOfCards=0;
    }

    addOneCard(card) {
        this.cards.push(card);
        this.values += this.addPoint(card);
        this.aces += this.haveAce(card.number);
        this.blackjack = this.isblackjack(); 
        // this.numOfCards +=1;
        this.faces += this.haveFace(card.value);
       
    }

    addPoint(card) {
        if (card.number === "A" && this.aces > 1) {
            return 1;
        } else {
            return card.value;
        }
    }

    haveAce(number) {
        if (number === "A") {
            return 1;
        }
        return 0;
    }

    haveFace(value) {
        if (value === 10) {
            return 1;
        }
        return 0;
    }

    isblackjack= () => {
        if (this.value === 21) {
            showResult("blackjackkkkk")
            return this.aces === 1
            &&
             this.faces === 1;
            
        }
    }
}

let cards = new Deck();

let player = new Player();
let dealer = new Player();

let gameOver = false;

/* DEALER'S RANDOM CARDS */
const dealersHand = document.getElementById("dealers-hand");
dealer.addOneCard(cards.giveOneCard());
dealer.addOneCard(cards.giveOneCard());

dealersHand.innerHTML += `<div>${dealer.cards[0].suit + dealer.cards[0].number}</div>`
let html = `<div>${dealer.cards[1].suit + dealer.cards[1].number}</div>`
dealersHand.innerHTML += html;

const dealersPoint = document.getElementById("points-of-dealer");
dealersPoint.innerHTML = `[${dealer.cards[0].value}]`;

/* PLAYER'S RANDOM CARDS */
const playersHand = document.getElementById("players-hand");
const playersPoint = document.getElementById("points-of-player");
player.addOneCard(cards.giveOneCard());
player.addOneCard(cards.giveOneCard());

playersHand.innerHTML += `<div>${player.cards[0].suit + player.cards[0].number}</div>`;
playersHand.innerHTML += `<div>${player.cards[1].suit + player.cards[1].number}</div>`;
playersPoint.innerHTML = `[${player.values}]`;
    

const resultSituation = document.getElementById("result-situation");
const resultMessage = document.getElementById("result-message");

/* HIT 0R STAY */

hit = () => {
    let newCard = cards.giveOneCard();
    player.addOneCard(newCard);

    playersHand.innerHTML += `<div>${newCard.suit + newCard.number}</div>`;
    playersPoint.innerHTML = `[${player.values}]`;

    isOver21();
}

isOver21 = () => {

    if (player.values > 21) {
		if (player.aces !== 0) {
			player.values -= 10;
			player.aces -= 1;
			playersPoint.innerHTML = `[${player.values}]`;
		} else {
			gameOver = true;
			showResult("You Lost!")
		}
	}

}

stay = () => {
    setTimeout("checkResult()", 500);
}

checkResult = () => {
    dealersTurn();

    if(!gameOver){
        whoIsWinner();
    }
};

dealersTurn = () => {
/*
 1. dealer can select card until total cards' value smaller than 17. 
 2. if dealer's value bigger than 21, game over will be turn true, 

*/
while (dealer.values<17){
    let newCard = cards.giveOneCard();
    dealer.addOneCard(newCard);
    dealersHand.innerHTML += `[${dealer.values}]`
}
dealersPoint.innerHTML = `[${dealer.values}]`;

if (dealer.values > 21) {
    if (dealer.aces !== 0) {
        dealer.values -= 10;
        dealer.aces -= 1;
        dealersPoint.innerHTML = `[${dealer.values}]`;
        dealersTurn();
    } else {
        gameOver = true;
        showResult("YOU WIN 🎉🎉!!!");
    }
}
}

whoIsWinner =() =>{
/*
 1. dealer's value< player's value => win
 2. dealer's value> player's value => lose
 3. dealer's value = player's value => equality
*/

    let message = "";

    if(player.values >dealer.values){
        message ="You Win 🎉!!"
    }
    else if(dealer.values > player.values){
        message ="You Lose :/"
    }
    else{
        message ="There is equility, Let's play again!"
    }
    showResult(message);
}

showResult = (message) => {

    const showMessage = document. getElementById("showMessage");

    resultMessage.innerHTML =message;
    resultMessage.style.display = "block"
 

    document.getElementById("hit-btn").style.display = "none";
	document.getElementById("stay-btn").style.display = "none";
}

/* reload page */
newGame = () => {
	setTimeout("location.reload()", 500);
};

const playBlackjack = (delay, playerName) => {

}
