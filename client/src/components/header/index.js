import React from 'react';
import Logo from './logo';
import InputBar from './input_bar';
import HamburgerMenu from './hamburger_menu';
import './header.css';

export default props => {
    return (
        <div className="header">
            <Logo />
            <InputBar />
            <HamburgerMenu />
        </div>
    )
}