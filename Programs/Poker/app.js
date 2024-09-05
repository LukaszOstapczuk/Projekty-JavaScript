const { createDeck, shuffleDeck, dealCards } = require("./deck");
const {
  isRoyalFlush,
  isStraightFlush,
  isFourOfAKind,
  isFullHouse,
  isFlush,
  isStraight,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
} = require("./pokerHands");

const deck = createDeck();
shuffleDeck(deck);
const hand = dealCards(deck, 5);

console.log(
  "Rozdane karty:",
  hand.map((card) => `${card.value} of ${card.suit}`)
);

function analyzeHand(hand) {
  // Przygotowanie ręki do analizy
  const values = hand.map((card) => card.numValue).sort((a, b) => a - b);
  const suits = hand.map((card) => card.suit);

  // Sprawdzanie układów
  if (isRoyalFlush(values, suits)) {
    return "Royal Flush";
  } else if (isStraightFlush(values, suits)) {
    return "Straight Flush";
  } else if (isFourOfAKind(values)) {
    return "Four of a Kind";
  } else if (isFullHouse(values)) {
    return "Full House";
  } else if (isFlush(suits)) {
    return "Flush";
  } else if (isStraight(values)) {
    return "Straight";
  } else if (isThreeOfAKind(values)) {
    return "Three of a Kind";
  } else if (isTwoPair(values)) {
    return "Two Pair";
  } else if (isOnePair(values)) {
    return "One Pair";
  } else {
    return "High Card";
  }
}

const handResult = analyzeHand(hand);
console.log(`Twój układ to: ${handResult}`);
