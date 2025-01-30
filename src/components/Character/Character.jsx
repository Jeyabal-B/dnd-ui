import React, { useState } from 'react'
import './Character.css'

const Character = () => {

  const [currentScreen, setCurrentScreen] = useState('character-container');
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState([]);

  const showCreateOptions = () => {
    setCurrentScreen('create-character');
  }

  const showUpdateOptions = (characterData) => {
    setSelectedCharacter(characterData);
    setCurrentScreen('update-character');
  }

  const viewUpdateCharacter = async (event) => {
    event.preventDefault();
    const characterData = {
      name: event.target.elements.name.value,
      class: event.target.elements.class.value,
      gender: event.target.elements.gender.value,
      level: event.target.elements.level.value,
      maxHitPoints: event.target.elements.maxHitPoints.value,
    }
    console.log('Prepared characterData: ', characterData);
    await createNewCharacter(characterData);
    setCurrentScreen('character-container');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const characterData = {
      name: event.target.elements.name.value,
      class: event.target.elements.class.value,
      gender: event.target.elements.gender.value,
      level: event.target.elements.level.value,
      maxHitPoints: event.target.elements.maxHitPoints.value,
    }
    console.log('Prepared characterData: ', characterData);
    await createNewCharacter(characterData);
    setCurrentScreen('character-container');
  }

  const handleSubmitForUpdate = async (event) => {
    event.preventDefault();
    const updatedCharacterData = {
      ...selectedCharacter,
      name: event.target.elements.name.value,
      class: event.target.elements.class.value,
      gender: event.target.elements.gender.value,
      level: event.target.elements.level.value,
      maxHitPoints: event.target.elements.maxHitPoints.value,
    }
    console.log('Prepared characterData: ', updatedCharacterData);
    await updateCharacter(updatedCharacterData);
    setCurrentScreen('character-container');
  }

  const allCharacters = async () => {

    const URL = '/characters/getAll';
    const response = await fetch(URL);
    const body = await response.json();
    setCharacters(body);
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
    setCharacter(body);
    console.log('Character Created: ', body);
  }

  const updateCharacter = async (characterData) => {
    console.log('Going into the Edit Screen for:', characterData._id);
    const URL = '/characters';
    const response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(characterData)
    });
    const body = await response;
    console.log('Character Updated Successfully!')
  }

  const deleteCharacter = async (characterId) => {
    console.log('Delete request received for:', characterId);
    const URL = '/characters';
    const response = await fetch(URL, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ _id: characterId })
    });
    const body = await response;
    console.log('Character Deleted Successfully!')
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
              <div className='character-card-and-delete'>
                <div className="character-card">
                  <h2>{char.name}</h2>
                  <p>Class : {char.class}</p>
                </div>
                <button className='character-view-update' onClick={() => showUpdateOptions(char)} >
                  <b>Edit</b>
                </button>
                <button className='character-delete' onClick={() => deleteCharacter(char._id)} >
                  <b>X</b>
                </button>
              </div>
              <div className="character-stats">
                <p>Level :{char.level}</p>
                <p>Race :{char.race}</p>
                <p>Gender :{char.gender}</p>
                <p>Feats :{char.feats}</p>
                <p>Spell Slots :{char.spellSlots}</p>
                <p>Background :{char.backgroundInfo}</p>
                <p>Max Hit Points :{char.maxHitPoints}</p>
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
                Character Name: <input name='name' />
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

              <label>
                Max Hit Points: <input name='maxHitPoints' />
              </label>

              <button type='submit'>Submit</button>
            </form>
          </div>
        )}

      </div>

      <div className='character-update-existing'>

        {currentScreen === 'update-character' && selectedCharacter && (
          <div>
            <form onSubmit={handleSubmitForUpdate}>
              Edit Character
              <label>
                Character Name: <input name='name' value={selectedCharacter.name || ""} 
                onChange={(e) => setSelectedCharacter({...selectedCharacter, name: e.target.value})} />
              </label>

              <label>
                Class: <select name="class" value={selectedCharacter.class} 
                onChange={(e) => setSelectedCharacter({...selectedCharacter, class: e.target.value})} >
                  <option value="Fighter">Fighter</option>
                  <option value="Barbarian">Barbarian</option>
                  <option value="Warlock">Warlock</option>
                  <option value="Wizard">Wizard</option>
                  <option value="Druid">Druid</option>
                </select>
              </label>

              <label>
                Gender: <select name="gender" value={selectedCharacter.gender}
                onChange={(e) => setSelectedCharacter({...selectedCharacter, gender: e.target.value})} >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>

              <label>
                Level: <input name='level' value={selectedCharacter.level || "1"} 
                onChange={(e) => setSelectedCharacter({...selectedCharacter, level: e.target.value})} />
              </label>

              <label>
                Max Hit Points: <input name='maxHitPoints' value={selectedCharacter.maxHitPoints || "0"} 
                onChange={(e) => setSelectedCharacter({...selectedCharacter, maxHitPoints: e.target.value})} />
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