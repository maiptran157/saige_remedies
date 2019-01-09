import './user_signin.css';
import React, { Component, Fragment } from 'react';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { userSignInInfo, resetAuthError } from '../../actions';
import { renderInput } from '../helper';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const signInBtnStyle = {
    display: 'flex',
    flexDirection: 'row-reverse'
}

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInSuccessMessage: 'You have signed in successfully. You will be directed to home page shortly.'
        }
    }
    userSignIn = async (values) => {
        document.getElementsByClassName('sign-in-loading')[0].style.display = "";
        await this.props.userSignInInfo(values);
    }

    componentDidMount() {
        this.hideSignInLoading();
    }

    componentWillUnmount() {
        this.props.resetAuthError();
    }

    hideSignInLoading = (event) => {
        if (document.getElementsByClassName('sign-in-loading').length > 0) {
            document.getElementsByClassName('sign-in-loading')[0].style.display = "none";
        }
    }

    goBackHome = (delay = 1000) => {
        const url = localStorage.getItem('redirectUrl');
        setTimeout(() => {
            if (url) {
                this.props.history.push(url)
            }
            else {
                this.props.history.push('/')
            }
        }, delay)
        return null;
    }

    render() {
        const { handleSubmit, authError } = this.props;
        const url = localStorage.getItem('redirectUrl');
        const loggedin = localStorage.getItem('loggedin') === 'true';

        const renderField = () => {
            return <Fragment>
                <h3 className="sign-in-header">Sign in your Saige account</h3>
                <form onSubmit={handleSubmit(this.userSignIn)}>
                    <Field name="email" label="Email" component={renderInput} type="text" />
                    <Field name="password" label="Password" component={renderInput} type="password" />
                    <ReactLoading className="sign-in-loading" type="bubbles" />
                    <div className="input-container" style={signInBtnStyle}><button className="sign-in-btn">Sign In</button></div>
                    <div className="sign-up-option"> Don't have an account? <Link className="sign-up-link" to="/sign-up">Sign Up</Link></div>
                    <p className="auth-error-text">{authError}</p>
                </form>
            </Fragment>
        }
        const displaySignIn = () => {
            if (url && loggedin) {
                this.hideSignInLoading();
                localStorage.removeItem('redirectUrl');
                return this.props.history.push(url);
            } else if (loggedin) {
                this.hideSignInLoading();
                return <div className="sign-in-success-message">
                    {url.length > 1 ? 'You have signed in successfully. You will be directed to previous page shortly.' : this.state.signInSuccessMessage}
                    {this.goBackHome(2000)}
                </div>
            } else if (this.props.authError === "Error signing in") {
                this.hideSignInLoading();
                return <Fragment>
                    <h3 className="sign-in-fail-message">Email or password is incorrect. Please try again.</h3>
                    {renderField()}
                </Fragment>
            } else {
                this.hideSignInLoading();
                return renderField()
            }
        }

        return (
            <div className="sign-in-container">
                <Header logo={saigeLogo} />
                <div className="sign-in-section">
                    {displaySignIn()}
                </div>
            </div>
        )
    }
}

function validate(values) {
    const { email, password } = values;
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email';
    }
    if (!password) {
        errors.password = 'Please enter your password';
    }
    return errors;
}


SignIn = reduxForm({
    form: 'get_user_sign_in_info',
    validate: validate
})(SignIn);

function mapStateToProps(state) {
    return {
        auth: state.user.auth,
        authError: state.user.signInError
    }
}

export default connect(mapStateToProps, {
    userSignInInfo: userSignInInfo,
    resetAuthError: resetAuthError,
})(SignIn);
