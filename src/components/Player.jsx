import { useState } from 'react';

const Player = ({ name, symbol }) => {
    // console.log("Player Component rendered (" + symbol + ")");

    const [isEditing, setIsEditing] = useState(false);
    // console.log("State of isEditing (" + symbol + "): " + isEditing);

    const handleEdit = () => {
        setIsEditing(!isEditing);
        // console.log("State of isEditing (" + symbol + "): " + isEditing + " to " + !isEditing);
    }

    let playerName = <span className='player-name'>{name}</span>;

    if(isEditing) {
        playerName = <input type='text' required value={name} />
    }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
};

export default Player;
