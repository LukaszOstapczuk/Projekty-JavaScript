function hasNOfAKind(values, n) {
  const valueCounts = countValues(values);
  return Object.values(valueCounts).some((count) => count === n);
}

function countValues(values) {
  const counts = {};
  for (const value of values) {
    if (!counts[value]) {
      counts[value] = 0;
    }
    counts[value]++;
  }
  return counts;
}

function isRoyalFlush(values, suits) {
  return isStraightFlush(values, suits) && values[0] === 10;
}
//Poker - kolejne karty w kolerze.
function isStraightFlush(values, suits) {
  return isFlush(suits) && isStraight(values);
}

function isFourOfAKind(values) {
  return hasNOfAKind(values, 4);
}

//Układ składający się z trójki i pary
function isFullHouse(values) {
  const valueCounts = countValues(values);
  return (
    Object.values(valueCounts).includes(3) &&
    Object.values(valueCounts).includes(2)
  );
}

//Kolor
function isFlush(suits) {
  return new Set(suits).size === 1;
}
// Strit - 5 kart o kolejnych wartościach
function isStraight(values) {
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] + 1 !== values[i + 1]) {
      return false;
    }
  }
  return true;
}

function isThreeOfAKind(values) {
  return hasNOfAKind(values, 3);
}

function isTwoPair(values) {
  const valueCounts = countValues(values);
  return Object.values(valueCounts).filter((count) => count === 2).length === 2;
}

function isOnePair(values) {
  return hasNOfAKind(values, 2);
}

module.exports = {
  isRoyalFlush,
  isStraightFlush,
  isFourOfAKind,
  isFullHouse,
  isFlush,
  isStraight,
  isThreeOfAKind,
  isTwoPair,
  isOnePair,
};
