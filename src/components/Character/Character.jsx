import React from 'react'
import './Character.css'

const Character = () => {

  const allCharacters = async () => {

    const URL = 'https://catfact.ninja/fact';
    const response = await fetch(URL);
    const body = await response.json;
    console.log(response);
  }

  return (
    <div className='character'>
        <div className="charcter-bio"></div>
        <div className="character-stats"></div>
            <h2>Sample stats</h2>
            <button onClick={allCharacters}>
              Get All
            </button>
    </div>
  )

}

export default Character