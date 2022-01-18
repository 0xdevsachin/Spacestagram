import React from 'react'
import './header.style.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className='header'>
            <h1><Link to="/">🚀 Spacestagram</Link></h1>
            <h1><Link to="/like">Likes</Link></h1>
        </div>
    )
}

export default Header
