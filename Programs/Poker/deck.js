function createDeck() {
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      let numValue;
      if (value === "Ace") {
        numValue = 14;
      } else if (value === "King") {
        numValue = 13;
      } else if (value === "Queen") {
        numValue = 12;
      } else if (value === "Jack") {
        numValue = 11;
      } else {
        numValue = parseInt(value);
      }

      deck.push({ value, suit, numValue });
    }
  }

  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function dealCards(deck, numberOfCards) {
  return deck.slice(0, numberOfCards);
}

module.exports = {
  createDeck,
  shuffleDeck,
  dealCards,
};
