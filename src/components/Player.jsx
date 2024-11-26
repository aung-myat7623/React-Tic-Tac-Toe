import { useState } from "react";

export default function Player({name, symbol, isActive, handleChangeNewName}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  
  let nameAndInputChange = <div className="player-name">{playerName}</div>;
  
  const handleChangeName = (e) => {
    let newName = e.target.value
    
    if (newName.length > 5) {
      newName = newName.slice(0, 5) + "..."
    }
    setPlayerName(newName);
  }
  
  const handleChangeClick = () => {
    setIsEditing(preIsEditing => !preIsEditing);
    if (isEditing) {
      handleChangeNewName(symbol, playerName)
    }
  }
  
  if (isEditing) {
    nameAndInputChange = <input type="text" placeholder={playerName} onChange={handleChangeName} />
  }
  
  return (
    <li className={ isActive ? "active player" : "player"}>
      <div className="player-info">
        {nameAndInputChange}
        <div className="player-symbol">{symbol}</div>
      </div>
      <button onClick={handleChangeClick} className={isEditing ? "save" : "edit" }>{ isEditing ? "Save" : "Edit" }</button>
    </li>
    )
}