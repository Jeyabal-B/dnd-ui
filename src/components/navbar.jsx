//import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>DnD For All</div>
            <ul className='navbar-menu'>
                <li><Link to='/'/>Home</li>
                <li><Link to='/users'/>Users</li>
                <li><Link to='/characters'/>Characters</li>
            </ul>
        </div>
    )
}

export default Navbar