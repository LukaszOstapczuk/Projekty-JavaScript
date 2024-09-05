import React from "react";
import TileRow from "./TileRow";
import styles from "../App.module.css";

const TileBoard = ({ squareSize, board }) => (
  <div className={styles.tileBoard}>
    {board.map((row, rowIndex) => (
      <TileRow key={rowIndex} squareSize={squareSize} row={row} />
    ))}
  </div>
);

export default TileBoard;
