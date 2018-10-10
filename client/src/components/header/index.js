import React from 'react';
import Logo from './logo';
import InputBar from './input_bar';
import DropDownMenu from '../menu';

import './header.css';

export default props => {
    const { logo, buttonType } = props;
    return (
        <div className="header">
            <Logo logo={logo} buttonType={buttonType} />
            <InputBar />
            <DropDownMenu />
        </div>
    )
}