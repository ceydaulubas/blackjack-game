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
        this.allCards = modern;
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
        this.faces = 0;
        this.wn = false;
        // this.numOfCards=0;
    }

    addOneCard(card) {
        this.cards.push(card);
        this.values += this.addPoint(card);
        // this.numOfCards +=1;
        this.aces += this.haveAce(card.number);
        this.faces += this.haveFace(card.value);
        this.wn = this.isWn();
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

    isWn() {
        if (this.value === 21) {
            return this.aces === 1 && this.faces === 1;
        }
    }
}

let cards = new Deck();
let player = new Player();
let dealer = new Player();

let gameOver = false;


const playBlackjack = (delay, playerName) => {

}
