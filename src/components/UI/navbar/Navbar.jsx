import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FormButton from '../button/FormButton'
import { AuthContext } from '../../../context'

function Navbar() {
    const { setIsAuth } = useContext(AuthContext);
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <nav className='navbar'>
            <FormButton style={{ background: 'white' }} onClick={logout}>Exit</FormButton>
            <div className="navbar__links">
                <Link style={{ color: 'white' }} to="/about">About us</Link>
                <Link style={{ color: 'white' }} to="/posts">Posts</Link>
            </div>
        </nav>
    )
}

export default Navbar