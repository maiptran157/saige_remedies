import React from 'react';
import Logo from './logo';
import InputBar from './input_bar';
import HamburgerButton from './hamburger_button';
import './header.css';

export default props => {
    return (
        <div className="header">
            <Logo/>
            <InputBar/>
            <HamburgerButton/>
        </div>
    )
}