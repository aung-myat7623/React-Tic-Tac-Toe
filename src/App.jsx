import { useState } from "react";

import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  ]

const checkActivePlayer = (gameTurns) => {
  let activePlayer = "X";
  
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O"
  }
  
  return activePlayer
}

export default function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2"
  })
  const [gameTurns, setGameTurns] = useState([]);
  //const [activePlayer, setActivePlayer] = useState("X");
  
  let activePlayer = checkActivePlayer(gameTurns);
  
  const gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];
  
  
  for ( const gameTurn of gameTurns) {
    const { square, player } = gameTurn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  
  let winner;
  
  for ( const pattern of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[pattern[0]["row"]][pattern[0]["column"]];
    const secondSymbol = gameBoard[pattern[1]["row"]][pattern[1]["column"]];
    const thirdSymbol = gameBoard[pattern[2]["row"]][pattern[2]["column"]];
    
    if (firstSymbol && secondSymbol === firstSymbol && thirdSymbol === firstSymbol ) {
      winner = players[firstSymbol];
    }
  }
  
  const handleChangeNewName = (symbol, newName) => {
    setPlayers(prePlayers => {
      return {
        ...prePlayers,
        [symbol]: newName
      }
    })
  }
  
  const handleActivePlayer = (rowIndex, colIndex) => {
    //setActivePlayer(preActivePlayer => preActivePlayer === "X" ? "O" : "X");
    setGameTurns(preGameTurns => {
      let activePlayer = checkActivePlayer(preGameTurns);
      
      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex}, player: activePlayer}, ...preGameTurns];
      
      return updatedGameTurns;
    })
  }
  
  const handleRestart = () => {
    setGameTurns([])
  }
  
  
  return (
    <>
      <Header />
      <main>
        <div className="game-board-wrapper">
          <div className="players">
            <ol>
              <Player name={players.X} symbol="X" isActive={ activePlayer === "X"} handleChangeNewName={handleChangeNewName}/>
              <Player name={players.O} symbol="O" isActive={ activePlayer === "O"} handleChangeNewName={handleChangeNewName}/>
            </ol>
          </div>
          <GameBoard handleActivePlayer={handleActivePlayer} gameBoard={gameBoard} hasWinner={winner}/>
        </div>
        {/* Gameover */}
        { winner && <p>{winner} has won! <button onClick={handleRestart}>Restart</button></p>}
        { (gameTurns.length === 9 && !winner ) && <p>It is a Draw! <button onClick={handleRestart}>Restart</button></p>  }
      </main>
      <Log gameTurns={gameTurns} />
    </>
    )
}