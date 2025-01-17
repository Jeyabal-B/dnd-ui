import React, { useState } from 'react'
import './Character.css'

const Character = () => {

  const [currentScreen, setCurrentScreen] = useState('character-container');
  const [characters, setCharacters] = useState([]);
  const [character, createCharacter] = useState([]);

  const allCharacters = async () => {

    const URL = '/characters/getAll';
    const response = await fetch(URL);
    const body = await response.json();
    setCharacters(body);
    console.log('Response Body: ', characters);
  }

  const newCharacter = async () => {
    const URL = '/characters/add';
    const response = await fetch(URL);
    const body = await response.json();
    createCharacter(body);
    console.log('Request Body: ', character);
  }

  const showCreateOptions = () => {
    setCurrentScreen('create-character');
  }

  return (
    
    
      <div className='character-container'>
        <div className='character-get-all'>

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

        <div className='character-add-new'>

          <button onClick={showCreateOptions}>
            Create New
          </button>
          {currentScreen === 'create-character' && (
            <div>
              This is just a sample page to create a new character. Details TBD.
            </div>
          )}
          
        </div>

      </div>
    
  )
}

export default Character