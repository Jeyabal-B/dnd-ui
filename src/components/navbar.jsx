//import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../assets/logo.jpg'

function Navbar() {
    return (
        <nav className='container'>
            <img src={logo} className='logo'></img>
            <ul className='navbar-menu'>
                <li><Link to='/hero'>Home</Link></li>
                <li>Users</li>
                <li><Link to='/character'>Characters</Link></li>
                <li><button className='btn'>Contact Us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar