export default function Log({gameTurns}) {
  return (
    <ol>
      { gameTurns.length > 0 && gameTurns.map(gameTurn => (
        <li key={`${gameTurn.square.row}${gameTurn.square.col}`}>
          { gameTurn.player } Selected { gameTurn.square.row }, { gameTurn.square.col }
        </li>
      ))}
    </ol>
    )
}