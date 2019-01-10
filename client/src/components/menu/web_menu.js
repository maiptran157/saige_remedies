import './menu.css';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, resetAuth, checkUserLoginStatus } from '../../actions';

const textStyle = {
    textDecoration: 'none',
    color: 'white'
}

class WebMenu extends Component {
    resetAuthAfterSignUp = async () => {
        await this.props.resetAuth();
    }

    componentWillMount() {
        this.props.checkUserLoginStatus().then(() => {
            if (this.props.loginStatus.success === false) {
                this.props.signOut();
            }
        });
    }

    signOut = async () => {
        this.props.signOut();
        localStorage.removeItem('userAgreement');
    }

    renderLinks() {
        const { auth } = this.props;
        const firstName = localStorage.getItem('firstName');
        if (auth && firstName) {
            return (
                <Fragment>
                    <li style={textStyle}>Welcome {firstName}</li>
                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                    <li><span onClick={this.signOut} style={textStyle}>Sign Out</span></li>
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
        auth: state.user.auth,
        loginStatus: state.user.loginStatus.data,
    }
}

export default connect(mapStateToProps, {
    signOut: signOut,
    resetAuth: resetAuth,
    checkUserLoginStatus: checkUserLoginStatus,
})(WebMenu);