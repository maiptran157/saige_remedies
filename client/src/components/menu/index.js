import React, { Component, Fragment } from 'react';
import hamburgerMenu from '../../assets/images/hamburger_white_shadow.png';
import './menu.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const textStyle = {
    textDecoration: 'none',
    color: 'white'
}

class DropDownMenu extends Component {
    constructor(props) {
        super(props);
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
        if (!this.DropDownMenu.contains(event.target)) {
            this.setState({ showMenu: false, }, () => {
                document.removeEventListener('click', this.closeMenu)
            });
        }
        this.setState({ showMenu: false });
    }

    async logOut() {
        localStorage.removeItem('email');
        localStorage.removeItem('firstName');
        localStorage.removeItem('loggedin');
        localStorage.removeItem('username');
        try {
            const response = await axios.get(config.LOG_OUT_URL);
            console.log("response from server:", response)
        } catch (error) {
            console.log("Error Message:", error);
        }
    }

    render() {
        const displayMenuList = () => {
            const loggedIn = localStorage.getItem('loggedin');
            const firstName = localStorage.getItem('firstName');
            if (loggedIn && firstName) {
                return <Fragment>
                    <ul>
                        <hr />
                        <li>Welcome {firstName}</li>
                        <hr />
                        <li><Link style={textStyle} to="/">Home</Link></li>
                        <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                        <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                        <li><span onClick={this.logOut} style={textStyle} >Log Out</span></li>
                    </ul>
                </Fragment>
            }
            return <Fragment>
                <ul>
                    <hr />
                    <li><Link style={textStyle} to="/sign-in">Sign In</Link></li>
                    <hr />
                    <li><Link style={textStyle} to="/">Home</Link></li>
                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                    <li><Link style={textStyle} to="/sign-up">Sign Up</Link></li>
                </ul>
            </Fragment>
        }
        return (
            <div className="hamburger-container">
                <div className="hamburger-icon" onClick={this.showMenu}>
                    <img src={hamburgerMenu} alt="" />
                </div>
                <div className={`hamburger-modal ${this.state.showMenu ? "full-size" : ""}`}
                    ref={(element) => {
                        this.DropDownMenu = element;
                    }}>
                    <div className="close-symbol" onClick={this.closeMenu}>X</div>
                    {displayMenuList()}
                </div>
            </div>
        );
    }
}

export default DropDownMenu;