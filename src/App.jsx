import { useState } from "react";

import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const checkActivePlayer = (gameTurns) => {
  let activePlayer = "X";
  
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O"
  }
  
  return activePlayer
}

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");
  
  let activePlayer = checkActivePlayer(gameTurns);
  
  const handleActivePlayer = (rowIndex, colIndex) => {
    //setActivePlayer(preActivePlayer => preActivePlayer === "X" ? "O" : "X");
    setGameTurns(preGameTurns => {
      let activePlayer = checkActivePlayer(preGameTurns);
      
      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex}, player: activePlayer}, ...preGameTurns];
      
      return updatedGameTurns;
    })
  }
  
  return (
    <>
      <Header />
      <main>
        <div className="game-board-wrapper">
          <div className="players">
            <ol>
              <Player name="Player 1" symbol="X" isActive={ activePlayer === "X"}/>
              <Player name="Player 2" symbol="O" isActive={ activePlayer === "O"}/>
            </ol>
          </div>
          <GameBoard handleActivePlayer={handleActivePlayer} gameTurns={gameTurns} />
        </div>
      </main>
      <Log gameTurns={gameTurns} />
    </>
    )
}