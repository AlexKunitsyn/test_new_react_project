// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
            </ul>
        </nav>
    )

};

export default Navigation;