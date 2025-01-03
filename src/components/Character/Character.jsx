import React from 'react'
import './Character.css'

const Character = () => {
  return (
    <div className='character'>
        <div className="charcter-bio"></div>
        <div className="character-stats"></div>
            <h2>Sample stats</h2>
            <h3>Strength 18</h3>
            <h3>Constitution 15</h3>
            <h3>Wisdom 20</h3>
    </div>
  )
}

export default Character