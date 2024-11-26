import { useState } from "react";


// Need GameBoard
export default function GameBoard({handleActivePlayer, gameBoard, hasWinner}) {
  return (
    <div className="game-board">
      
      <ol>
        { gameBoard.map((row, rowIndex) => {
          return (<li key={rowIndex}>
            <ol>
              { row.map((playerSymbol, colIndex) => {
                return (<li key={colIndex}>
                  <button onClick={() => handleActivePlayer(rowIndex, colIndex)} disabled={playerSymbol || hasWinner}>{playerSymbol}</button>
                </li>)
              })}
            </ol>
          </li>)
        })}
      </ol>
      
    </div>
    )
}