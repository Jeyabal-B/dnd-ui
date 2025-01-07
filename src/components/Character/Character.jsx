import React, { useState } from 'react'
import './Character.css'

const Character = () => {

  const [characters, setCharacters] = useState([]);

  const allCharacters = async () => {

    const URL = '/characters/getAll';
    const response = await fetch(URL);
    const body = await response.json();
    
    console.log('Response Body: ',body);
    setCharacters(body);
    console.log('Response Body: after parse ',characters);
  }

  return (
    <div className='character'>
        <div className="charcter-bio"></div>
        <div className="character-stats"></div>
            <h2>Sample stats</h2>
            <button onClick={allCharacters}>
              Get All
            </button>
            {
              characters.length > 0 && (
                <ul>
                  {characters.map((character, index) => (
                    <li key={index}>
                      {character.Name}
                    </li>
                  )
                  )}
                </ul>
              ) 
            }
    </div>
  )

}

export default Character