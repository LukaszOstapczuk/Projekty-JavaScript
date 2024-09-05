import React, { useContext } from "react";
import TileRow from "./TileRow";
import { BoardContext } from "../BoardContext";

function TileBoard() {
  const { board } = useContext(BoardContext);

  return (
    <div className="tileBoard">
      {board.map((value, index) => (
        <TileRow rowIndex={index} boardRow={value} key={index} />
      ))}
    </div>
  );
}

export default TileBoard;
