import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar__links">
                <Link style={{ color: 'white' }} to="/about">About us</Link>
                <Link style={{ color: 'white' }} to="/posts">Posts</Link>
            </div>
        </nav>
    )
}

export default Navbar