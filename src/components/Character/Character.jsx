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

  const createNewCharacter = async (characterData) => {
    console.log('Request Body: ', character);
    const URL = '/characters/add';
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(characterData)
    });
    const body = await response.json();
    createCharacter(body);

  }

  const showCreateOptions = () => {
    setCurrentScreen('create-character');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const characterData = {
      name: event.target.elements.name.value,
      class: event.target.elements.class.value,
      gender: event.target.elements.gender.value,
      level: event.target.elements.level.value
    }
    console.log('Prepared RequestBody: ', characterData);
    await createNewCharacter(characterData);
    setCurrentScreen('character-container');
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
            <form onSubmit={handleSubmit}>
              Enter Character Details

              <label>
                Character Name: <input name='name'/>
              </label>

              <label>
                Class: <select name="class">
                  <option value="Fighter">Fighter</option>
                  <option value="Barbarian">Barbarian</option>
                  <option value="Warlock">Warlock</option>
                  <option value="Wizard">Wizard</option>
                  <option value="Druid">Druid</option>
                </select>
              </label>

              <label>
                Gender: <select name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>

              <label>
                Level: <input name='level' />
              </label>

              <button type='submit'>Submit</button>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}

export default Character