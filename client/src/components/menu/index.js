import React, { Component } from 'react';
import hamburgerMenu from '../../assets/images/hamburger_white_shadow.png';
import './menu.css';
import { Link } from 'react-router-dom';

const textStyle = {
    textDecoration: 'none',
    color: 'white'
}

class DropDownMenu extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true, }, () => {
            document.addEventListener('click', this.closeMenu)
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false, }, () => {
                document.removeEventListener('click', this.closeMenu)
            });
        }
        this.setState({ showMenu: false});
    }

    render() {

        return (
            <div className="hamburger-container">
                <div className="hamburger-icon" onClick={this.showMenu}>
                    <img src={hamburgerMenu} alt="" />
                </div>
                {/* {
                    this.state.showMenu
                        ? (
                            <div className="hamburger-modal"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}>
                                <div className="close-symbol" onClick={this.closeMenu}>X</div>
                                <div className="buffer-box"></div>
                                <ul>
                                    <hr/><li><Link style={textStyle} to="/sign-in">Sign In</Link></li><hr/>
                                    <li><Link style={textStyle} to="/">Home</Link></li>
                                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                                    <li><Link style={textStyle} to="/conditon:All">All Conditions</Link></li>
                                    <li><Link style={textStyle} to="/favorites">My Favorites</Link></li>
                                    
                                </ul>
                            </div>
                        )
                        : (
                            null
                        )
                } */}
                <div className={`hamburger-modal ${this.state.showMenu ? "full-size" : ""}`}
                    ref={(element) => {
                        this.dropdownMenu = element;
                    }}>
                    {/* Need to link the pages once they are built out? */}
                    <div className="close-symbol" onClick={this.closeMenu}>X</div>
                    <div className="buffer-box"></div>
                    <ul>
                        <hr/><li><Link style={textStyle} to="/sign-in">Sign In</Link></li><hr/>
                        <li><Link style={textStyle} to="/">Home</Link></li>
                        <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                        <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                        <li><Link style={textStyle} to="/conditon:All">All Conditions</Link></li>
                        <li><Link style={textStyle} to="/favorites">My Favorites</Link></li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}

export default DropDownMenu;