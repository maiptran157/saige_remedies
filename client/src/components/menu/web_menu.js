import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const textStyle = {
    textDecoration: 'none',
    color: 'white'
}

export default props => {
    return (
        <ul className="web-menu">
            <hr />
            <li><Link style={textStyle} to="/sign-in">Sign In</Link></li>
            <hr />
            <li><Link style={textStyle} to="/">Home</Link></li>
            <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
            <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
            <li><button>Log Out</button></li>
        </ul>
    )
}