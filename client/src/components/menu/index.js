import './menu.css';
import React, { Component, Fragment } from 'react';
import hamburgerMenu from '../../assets/images/hamburger_white_shadow.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, resetAuth, checkUserLoginStatus } from '../../actions';

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
        // event.preventDefault();
        this.setState({ showMenu: false, }, () => {
            document.removeEventListener('click', this.closeMenu)
        });
    }

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
            return (<Fragment>
                <ul>
                    <hr />
                    <li>Welcome {firstName}</li>
                    <hr />
                    <li><Link style={textStyle} to="/">Home</Link></li>
                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                    <li><span onClick={this.signOut} style={textStyle} >Sign Out</span></li>
                </ul>
            </Fragment>
            )
        }
        return (
            <Fragment>
                <ul>
                    <li><Link style={textStyle} to="/sign-in">Sign In</Link></li>
                    <li><Link style={textStyle} to="/">Home</Link></li>
                    <li><Link style={textStyle} to="/about-saige">About Saige</Link></li>
                    <li><Link style={textStyle} to="/meet-the-team">Meet the Team</Link></li>
                    <li><Link style={textStyle} to="/sign-up" onClick={this.resetAuthAfterSignUp}>Sign Up</Link></li>
                </ul>
            </Fragment>
        );
    }

    render() {
        return (
            <div className="hamburger-container">
                <div className="hamburger-icon" onClick={this.showMenu}>
                    <img src={hamburgerMenu} alt="" />
                </div>
                <div className={`hamburger-modal ${this.state.showMenu ? "full-size" : ""}`}
                    ref={(element) => {
                        this.DropDownMenu = element;
                    }}>
                    <div className="close-symbol" onClick={this.closeMenu}>x</div>
                    {this.renderLinks()}
                </div>
            </div>
        );
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
})(DropDownMenu);