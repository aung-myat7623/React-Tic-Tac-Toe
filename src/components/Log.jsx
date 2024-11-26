export default function Log({gameTurns}) {
  
  const showLog = (gameTurn) => {
    let className;
  
    if (gameTurn == gameTurns[0]) {
      className = "current-log";
    } else if (gameTurn == gameTurns[1]) {
      className = "previous-log";
    }
    
    return className;
  }
  
  return (
    <ol className="game-logs">
      { gameTurns.length > 0 && gameTurns.map((gameTurn) => (
        <li key={`${gameTurn.square.row}${gameTurn.square.col}`} className={showLog(gameTurn)}>
          { gameTurn.player } Selected { gameTurn.square.row }, { gameTurn.square.col }
        </li>
      ))}
    </ol>
    )
}