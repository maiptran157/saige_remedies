import React from 'react';
import './logo.css';
import { Link } from 'react-router-dom';

export default props => {
    console.log(props);
    const { logo, buttonType } = props;
    return (
        <div className="logo-container">
            <Link to={buttonType === "back-button" ? "/" : "/"} className="logo">
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}