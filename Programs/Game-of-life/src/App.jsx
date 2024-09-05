import React, { useState, useReducer, useRef } from "react";
import styles from "./App.module.css";
import TileBoard from "./containers/TileBoard";
import Button from "./components/Button";

const boardGenerator = (rows, cols, spawnChance) =>
  Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      Math.random() < spawnChance / 100 ? "X" : "0"
    )
  );

let initialBoard = boardGenerator(10, 10, 33);

const reducer = (state, action) => {
  switch (action.type) {
    case "newCycle":
      return action.callback(state);
    case "reset":
      return initialBoard;
    default:
      return state;
  }
};

const countNeighbours = (row, col, board) => {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const newRow = row + i;
      const newCol = col + j;
      if (
        newRow >= 0 &&
        newRow < board.length &&
        newCol >= 0 &&
        newCol < board[0].length
      ) {
        count += board[newRow][newCol] === "X" ? 1 : 0;
      }
    }
  }
  return count;
};

const startNewCycle = (board) =>
  board.map((row, i) =>
    row.map((cell, j) => {
      const neighbours = countNeighbours(i, j, board);
      return (cell === "X" && (neighbours === 2 || neighbours === 3)) ||
        (cell === "0" && neighbours === 3)
        ? "X"
        : "0";
    })
  );

function App() {
  const [board, dispatch] = useReducer(reducer, initialBoard);
  const [buttonType, setButtonType] = useState("start");
  const intervalRef = useRef();

  const squareSize = window.innerHeight / (board.length * 1.3);
  const boardStyles = {
    left: `${window.innerWidth / 2 - (board[0].length * squareSize) / 2}px`,
    top: `${window.innerHeight / 2 - (board.length * squareSize) / 2}px`,
    width: `${board[0].length * squareSize}px`,
    height: `${board.length * squareSize}px`,
  };

  const handleButtonClick = (type) => {
    if (type === "start") {
      intervalRef.current = setInterval(() => {
        dispatch({ type: "newCycle", callback: startNewCycle });
      }, 500);
      setButtonType("stop");
    } else if (type === "stop") {
      clearInterval(intervalRef.current);
      setButtonType("start");
    } else if (type === "reset") {
      clearInterval(intervalRef.current);
      initialBoard = boardGenerator(10, 10, 33);
      dispatch({ type: "reset" });
      setButtonType("start");
    }
  };

  return (
    <div className={styles.app} style={boardStyles}>
      <TileBoard squareSize={squareSize} board={board} />
      <Button type={buttonType} onClick={() => handleButtonClick(buttonType)} />
      <Button type="reset" onClick={() => handleButtonClick("reset")} />
    </div>
  );
}

export default App;
