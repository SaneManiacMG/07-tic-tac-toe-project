import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    console.log("Player component rendered...");

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(editing => !editing);
        
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    };

    let editablePlayerName = <span className='player-name'>{playerName}</span>;

    if(isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleNameChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
};

export default Player;
