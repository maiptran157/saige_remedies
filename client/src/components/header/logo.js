import React from 'react';
import './logo.css';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <div className="logo-container">
            <Link to="/" className="logo"></Link>
        </div>
    )
}