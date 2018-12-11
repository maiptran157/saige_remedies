import './menu.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, resetAuth } from '../../actions';

const textStyle = {
    textDecoration: 'none',
    color: 'white'
}

class WebMenu extends Component {

    renderLinks() {
        const { auth } = this.props;
        const firstName = localStorage.getItem('firstName');
        if (auth && firstName) {
            return (
                <Fragment>
                    <li style={textStyle}>Welcome {firstName}</li>
                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                    <li><span onClick={this.props.signOut} style={textStyle}>Sign Out</span></li>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <li><Link style={textStyle} to="/sign-in">Sign In</Link></li>
                <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                <li><Link style={textStyle} to="/sign-up" onClick={this.resetAuthAfterSignUp}>Sign Up</Link></li>
            </Fragment>
        );
    }

    resetAuthAfterSignUp = async () => {
        await this.props.resetAuth();
    }

    render() {
        return (
            <ul className="web-menu">
                {this.renderLinks()}
            </ul>
        )
    }
}


function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    signOut: signOut,
    resetAuth: resetAuth
})(WebMenu);