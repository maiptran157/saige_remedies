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
    }

    render() {
        return (
            <div className="hamburger-container">
                <div className="hamburger-icon" onClick={this.showMenu}>
                    {/* this btn will be replaced with hamburger menu icon, v.2 will be an animated hamburger menu icon */}
                    <img src={hamburgerMenu} alt="" />
                </div>
                {
                    this.state.showMenu
                        ? (
                            <div className="hamburger-modal"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}>
                                {/* how am I linking the pages/where are they linking to or rare they built out? */}
                                <div className="close-symbol" onClick={this.closeMenu}>X</div>
                                <ul>
                                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                                    <li><Link style={textStyle} to="/favorites">My Favorites</Link></li>
                                    <li><Link style={textStyle} to="/sign-in">Sign In</Link></li>
                                </ul>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}

export default DropDownMenu;