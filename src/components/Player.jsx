import { useState } from 'react';

const Player = ({ initialName, symbol }) => {
    // console.log("Player Component rendered (" + symbol + ")");

    const [playerName, setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);
    // console.log("State of isEditing (" + symbol + "): " + isEditing);

    const handleEdit = () => {
        setIsEditing(editing => !isEditing);
        // console.log("State of isEditing (" + symbol + "): " + isEditing + " to " + !isEditing);
    }

    const handleNameChange = (event) => {
        // console.log(event);
        setPlayerName(event.target.value);
    };

    let editablePlayerName = <span className='player-name'>{playerName}</span>;

    if(isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleNameChange} />
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
};

export default Player;
