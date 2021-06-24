import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { auth } from '../../firebase/firebase';
import logo from '../../Images/logo.png';
import './Header.css';

const Header = () => {

    const [loggedInUser] = useContext(UserContext);

    const [open, setOpen] = useState(false);

    const history = useHistory();

    const handleClick = () => {
        console.log('run');
        history.push('/login')
    }

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <img className='logo' src={logo} alt="logo" />
                <h3>Safe Ride</h3>
            </Link>
            <nav className={`navigation ${open ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
                {
                    loggedInUser ?
                        <span className="user">{loggedInUser?.displayName || loggedInUser?.email}</span>
                        :
                        <button className='highlight' onClick={handleClick}>Login</button>
                }
                {
                    loggedInUser ?
                        <button className="sign-out" onClick={() => auth.signOut()}>LogOut</button>
                        :
                        ''
                }
            </nav>
            <button onClick={() => setOpen(!open)} className="menu">
                <span className="user">{loggedInUser?.displayName || loggedInUser?.email}</span>
                {
                    !open ?
                        <svg width='40px' height="40px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        :
                        <svg width='40px' height="40px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                }
            </button>
        </div>
    );
};

export default Header;