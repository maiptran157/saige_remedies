import React from 'react';
import Logo from './logo';
import InputBar from './input_bar';
import DropDownMenu from '../menu';
import woodenHeader from '../../assets/images/wood_bg.jpg';

import './header.css';

const backgroundHeader = { backgroundImage: `url(${ woodenHeader })` }

export default props => {
    const { logo, buttonType } = props;
    return (
        <div className="header" style={ backgroundHeader }>
            <Logo logo={logo} buttonType={buttonType} />
            <InputBar push={props.push} />
            <DropDownMenu />
        </div>
    )
}