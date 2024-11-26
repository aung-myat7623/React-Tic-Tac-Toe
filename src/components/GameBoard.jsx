import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  ]
  
export default function GameBoard({handleActivePlayer, gameTurns}) {
  const gameBoard = initialGameBoard;
  
  for ( const gameTurn of gameTurns) {
    const { square, player } = gameTurn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  
  
  return (
    <div className="game-board">
      
      <ol>
        { gameBoard.map((row, rowIndex) => {
          return (<li key={rowIndex}>
            <ol>
              { row.map((playerSymbol, colIndex) => {
                return (<li key={colIndex}>
                  <button onClick={() => handleActivePlayer(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button>
                </li>)
              })}
            </ol>
          </li>)
        })}
      </ol>
      
    </div>
    )
}