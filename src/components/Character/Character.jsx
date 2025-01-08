import React, { useState } from 'react'
import './Character.css'

const Character = () => {

  const [characters, setCharacters] = useState([]);

  const allCharacters = async () => {

    const URL = '/characters/getAll';
    const response = await fetch(URL);
    const body = await response.json();

    setCharacters(body);
    console.log('Response Body: ', characters);
  }

  return (
    <div className='character-container'>
      <button onClick={allCharacters}>
        Get All
      </button>
      <div className='character'>
          {characters.map((char) => (
            <div key={char._id}>
              <div className="character-card">
                <h2>{char.name}</h2>
                <p>Class : {char.class}</p>
              </div>
              <div className="character-stats">
                <p>Race :{char.race}</p>
                <p>Gender :{char.gender}</p>
                <p>Feats :{char.feats}</p>
                <p>Spell Slots :{char.spellSlots}</p>
                <p>Background :{char.backgroundInfo}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Character