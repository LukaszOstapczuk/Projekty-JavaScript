import React from "react";
import Tile from "../components/Tile";
import styles from "../App.module.css";

const TileRow = ({ squareSize, row }) => (
  <div
    className={styles.tileRow}
    style={{ width: `${squareSize * row.length}px`, height: `${squareSize}px` }}
  >
    {row.map((cell, index) => (
      <Tile
        key={index}
        squareSize={squareSize}
        blockType={cell === "X" ? "border" : "movement"}
      />
    ))}
  </div>
);

export default TileRow;
