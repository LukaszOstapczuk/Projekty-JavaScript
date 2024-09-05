import React, { useContext } from "react";
import Tile from "../components/Tile";
import Ball from "../components/Ball";
import { BoardContext } from "../BoardContext";

function TileRow({ rowIndex, boardRow }) {
  const { squareSize } = useContext(BoardContext);
  const width = squareSize * boardRow.length;
  const height = squareSize;

  return (
    <div className="tileRow" style={{ width, height }}>
      {boardRow.map((val, index) => {
        if (val === "1") {
          return <Ball columnNumber={index} rowNumber={rowIndex} key="ball" />;
        } else if (val === "X") {
          return <Tile key={index} blockType="border" />;
        } else if (val === "0" || val === "Y") {
          return <Tile key={index} blockType="movement" />;
        } else {
          return <Tile key={index} blockType="portal" />;
        }
      })}
    </div>
  );
}

export default TileRow;
