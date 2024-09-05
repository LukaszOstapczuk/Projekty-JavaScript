import React from "react";
import styles from "../App.module.css";

const Tile = ({ squareSize, blockType }) => (
  <svg width={squareSize} height={squareSize}>
    <rect
      width={squareSize}
      height={squareSize}
      className={blockType === "border" ? styles.borderTile : styles.noLifeTile}
    />
  </svg>
);

export default Tile;
