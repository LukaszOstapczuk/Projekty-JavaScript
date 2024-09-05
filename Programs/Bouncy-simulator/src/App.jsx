import "./App.css";
import TileBoard from "./containers/TileBoard";
import { BoardProvider } from "./BoardContext";
import React from "react";

function App() {
  return (
    <BoardProvider>
      <div className="App">
        <TileBoard />
      </div>
    </BoardProvider>
  );
}

export default App;
