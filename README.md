# BlackJack

    Blackjack is a card game where the player(you) need to beat the dealer by getting closer to 21 higher than the dealer without exceeding 21.

    Rules:
        - The game has 6 decks of 52 classic playing cards (312 cards total).
        - Goal: Get closer to 21 than the dealer without going over 21.
        - If a player exceeds 21 he busts and it means that player loses the round.
        - Card Values:
            - 2 through 10 has face value
            - Jack, Queen and King have values of 10
            - Ace has 1 or 11 values depending of the hand whichever is the best for the hand
        - Initial Dealt:
            - Each player gets 2 initial random cards from the 6 decks of cards
                - Dealer gets 1 card facing down. Player doesn't know about this card.
                - Player gets 1 card facing up
                - Dealer gets 1 card facing up
                - Player gets 1 card facing up
                Example:
                Dealer Hand
                |-------|       |-------|
                |?      |       |9      |
                |       |       |       |
                |      ?|       |      9|
                |-------|       |-------|
                ?               Spades

                Player Hand
                |-------|       |-------|
                |2      |       |4      |
                |       |       |       |
                |      2|       |      4|
                |-------|       |-------|
                Diamonds        Clubs
        - The facing down card gets shown when the player "stays" or "busts".
        - The dealer has to hit (get card) until his hand has a value of 17 or more.
        He can't get cards if his hand has a value of 17 or more even if he has a worse hand than the player.

    Playing:
        - The Player wants to get closer to 21.
        - The player has 2 choices: "hit" or "stay"
        - If the player hits he gets a new card
            - If the new hand value is less than 21 and satisfies the player he "stays"
                - The dealer shows his hidden card
                - If the dealer has a less then 17 value hand the dealer gets a new card until the hand has 17 or more value
                - If the dealer busts the player wins
                - The winner of the round is the closest one to 21
            - If the new hand value is 21 then the player has a blackjack hand
                - The dealer show the hidden card
                - If the dealer has a less then 17 value hand the dealer gets a new card until the hand has 17 or more value
                - If the dealer has a 21 value hand the round ends draw
                - If the dealer busts the player wins
                - The winner of the round is the closest one to 21
            - If the new hand value exceeds 21 then the player busts
                - The dealer automatically wins




## Tools

This project was created with JS, HTML and CSS