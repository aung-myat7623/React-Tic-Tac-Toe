import { useState } from "react";

export default function Player({name, symbol, isActive}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  
  let nameAndInputChange = <div className="player-name">{playerName}</div>;
  
  const handleChangeName = (e) => {
    setPlayerName(e.target.value);
  }
  
  const handleChangeClick = () => {
    setIsEditing(preIsEditing => !preIsEditing);
  }
  
  if (isEditing) {
    nameAndInputChange = <input type="text" value={playerName} onChange={handleChangeName} />
  }
  
  return (
    <li className={ isActive ? "active" : null}>
      <div className="player-info">
        {nameAndInputChange}
        <div className="player-symbol">{symbol}</div>
      </div>
      <button onClick={handleChangeClick}>{ isEditing ? "Save" : "Edit" }</button>
    </li>
    )
}