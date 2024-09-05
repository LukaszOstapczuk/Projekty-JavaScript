const ballWeights = [1, 2, 1, 1, 1, 1, 1, 1];

// Funkcja do mieszania elementów tablicy Fisher-Yates Shuffle
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // Dopóki istnieją elementy do przemieszania
  while (0 !== currentIndex) {
    // Wybierz losowy element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // I zamień go z bieżącym elementem.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const shuffledBallWeights = shuffle([...ballWeights]);

console.log("Losowe ułożenie bil:", shuffledBallWeights);

function findHeaviestGroup(shuffledBallWeights) {
  if (ballWeights.length !== 8) {
    console.error("Nieprawidłowa liczba kul. Oczekiwano 8 kul.");
    return;
  }

  const groupA = shuffledBallWeights.slice(0, 3);
  const groupB = shuffledBallWeights.slice(3, 6);
  const groupC = shuffledBallWeights.slice(6);

  const sumA = groupA.reduce((a, b) => a + b, 0);
  const sumB = groupB.reduce((a, b) => a + b, 0);

  if (sumA > sumB) {
    return [0, 1, 2];
  } else if (sumA < sumB) {
    return [3, 4, 5];
  } else {
    return [6, 7];
  }
}

const firstSelectionResult = findHeaviestGroup(shuffledBallWeights);

function findHeaviestBall() {
  const balls = findHeaviestGroup(shuffledBallWeights);
  if (balls.length === 2) {
    return shuffledBallWeights[balls[0]] > shuffledBallWeights[balls[1]]
      ? balls[0]
      : balls[1];
  } else {
    const [ball1, ball2, ball3] = balls;

    if (shuffledBallWeights[ball1] > shuffledBallWeights[ball2]) {
      return ball1;
    } else if (shuffledBallWeights[ball1] < shuffledBallWeights[ball2]) {
      return ball2;
    } else {
      return ball3;
    }
  }
}

const searchedBall = findHeaviestBall();
console.log("Poszukiwana bila znajduje się na indeksie:", searchedBall);
console.log(
  `Poszukiwana bila znajduje się na ${searchedBall + 1} miejscu w tabeli `
);
