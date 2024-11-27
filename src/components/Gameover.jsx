export default function Gameover({msg, handleRestart}) {
  // let gameoverStatus;
  // if (msg) {
  //   gameoverStatus = "show-gameover"
  // } else if (gameoverStatus === "show-gameover") {
  //   gameoverStatus = "hide-gameover"
  // }
  return (
      <div className="gameover">
        <p>{msg}</p>
        <button onClick={() => handleRestart()}>Restart</button>
      </div>
    )
}