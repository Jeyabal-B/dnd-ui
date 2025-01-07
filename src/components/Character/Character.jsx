import React from 'react'
import './Character.css'

const Character = () => {

  const allCharacters = async () => {

    const URL = '/api/users/getAll';
    const response = await fetch(URL);
    const body = await response.json();
    console.log(body);
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