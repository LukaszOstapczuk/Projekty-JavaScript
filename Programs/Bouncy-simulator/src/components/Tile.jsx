import React, { useContext } from "react";
import { BoardContext } from "../BoardContext";
import blockImage from "./block.png";
import portalImage from "./Pipe.png";

function Tile({ blockType }) {
  const { squareSize } = useContext(BoardContext);
  const size = `${squareSize}px`;

  if (blockType === "border") {
    return (
      <img
        src={blockImage}
        alt="block"
        width={size}
        height={size}
        className="borderTile"
      />
    );
  } else if (blockType === "movement") {
    return (
      <svg width={size} height={size}>
        <rect width={size} height={size} className="movementTile" />
      </svg>
    );
  } else {
    return (
      <img
        src={portalImage}
        alt="block"
        width={size}
        height={size}
        className="borderTile"
      />
    );
  }
}

export default Tile;
