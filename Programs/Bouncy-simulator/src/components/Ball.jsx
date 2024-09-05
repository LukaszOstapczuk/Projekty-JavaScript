import React, { useRef, useContext } from "react";
import image from "./mario2.png";
import { BoardContext } from "../BoardContext";

function Ball({ columnNumber, rowNumber }) {
  const { board, squareSize } = useContext(BoardContext);
  const ballElement = useRef(null);
  let translationVector = useRef([1, 1]).current;
  let counter = useRef(0).current;

  const setTranslate = (xPos, yPos, t) => {
    if (ballElement.current) {
      ballElement.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      ballElement.current.style.transition = `${t}s linear`;
    }
  };

  const randomizeTranslation = (oldVector) => {
    let newVector = [...oldVector];
    while (newVector[0] === oldVector[0] && newVector[1] === oldVector[1]) {
      newVector = [
        Math.sign(Math.random() - 0.5),
        Math.sign(Math.random() - 0.5),
      ];
    }
    return newVector;
  };

  const ballMovement = (currentRow, currentColumn) => {
    counter++;
    const transitionTime = 0.1;

    if (board[currentRow][currentColumn] === "Y") {
      translationVector = randomizeTranslation(translationVector);
      board[currentRow][currentColumn] = "0";
    }

    if (board[currentRow][currentColumn + translationVector[0]] === "X") {
      translationVector[0] *= -1;
    }

    if (board[currentRow + translationVector[1]][currentColumn] === "X") {
      translationVector[1] *= -1;
    }

    if (
      board[currentRow + translationVector[1]][
        currentColumn + translationVector[0]
      ] === "X"
    ) {
      translationVector[1] *= -1;
      translationVector[0] *= -1;
    }

    const newColumn = currentColumn + translationVector[0];
    const newRow = currentRow + translationVector[1];
    setTranslate(
      (newColumn - columnNumber) * squareSize,
      (newRow - rowNumber) * squareSize,
      transitionTime
    );

    if (counter < 2000) {
      setTimeout(() => {
        ballMovement(newRow, newColumn);
      }, transitionTime * 1000);
    }
  };

  return (
    <img
      ref={ballElement}
      onClick={() => ballMovement(rowNumber, columnNumber)}
      src={image}
      alt="ball"
      width={squareSize}
      height={squareSize}
      id="ball"
    />
  );
}

export default Ball;
