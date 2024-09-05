import React, { createContext } from "react";

const BoardContext = createContext({});

const BoardProvider = (props) => {
  const board = [
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "X", "t", "0", "0", "0", "Y", "0", "X"],
    ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ];
  const squareFitSize = window.innerHeight / (board.length + 2);

  return (
    <BoardContext.Provider value={{ board, squareSize: squareFitSize }}>
      {props.children}
    </BoardContext.Provider>
  );
};

export { BoardProvider, BoardContext };
