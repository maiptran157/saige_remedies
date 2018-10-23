import React from 'react';
import Logo from './logo';
import InputBar from './input_bar';
import DropDownMenu from '../menu';
import woodenHeader from '../../assets/images/wood_bg.jpg';
import WebMenu from '../menu/web_menu';
import './header.css';

const backgroundHeader = { backgroundImage: `url(${woodenHeader})` }

export default props => {
    const { logo, buttonType } = props;
    console.log("PROPS IN INPUT BAR:", props);
    return (
        <div className="header" style={backgroundHeader}>
            <Logo logo={logo} buttonType={buttonType} />
            <InputBar match={props.match} push={props.push} />
            <DropDownMenu />
            <WebMenu />
        </div>
    )
}