import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import axios from 'axios';
import config from '../../config';

const textStyle = {
    textDecoration: 'none',
    color: 'white'
}

class WebMenu extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
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
                    <li style={textStyle}>Welcome {firstName}</li>
                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                    <li><span onClick={this.logOut} style={textStyle} >Log Out</span></li>
                </Fragment>
            }
            return <Fragment>
                <li><Link style={textStyle} to="/sign-in">Sign In</Link></li>
                <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                <li><Link style={textStyle} to="/sign-up">Sign Up</Link></li>
            </Fragment>
        }
        return (
            <ul className="web-menu">
                {displayMenuList()}
            </ul>
        )
    }
}

export default WebMenu;