import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='Navbar'>
            <h1>Maze TV</h1>
            <div className='Navbar_items'>
                <Link className='btn' to='/home'>Home</Link>
                <Link className='btn' to='/about'>About</Link>
            </div>
        </div>
    )
}

export default Navbar
