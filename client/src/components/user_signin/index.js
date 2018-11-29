import './user_signin.css';
import React, { Component, Fragment } from 'react';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { userSignInInfo } from '../../actions';
import { renderInput } from '../helper';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    userSignIn = async (values) => {
        await this.props.userSignInInfo(values);
    }

    render() {
        const { handleSubmit, authError } = this.props;
        const url = localStorage.getItem('redirectUrl');
        const loggedin = localStorage.getItem('loggedin') === 'true';
        const goBackHome = () => {
            setTimeout(() => {
                this.props.history.push('/')
            }, 1000)
        }
        const displaySignIn = () => {
            if (url && loggedin) {
                localStorage.removeItem('redirectUrl');
                return this.props.history.push(url);
            } else if (loggedin) {
                return <div className="sign-in-success-message">
                    You have signed in successfully
                    {goBackHome()}
                </div>
            } else if (!this.props.auth && this.props.error === "Error signing in") {
                return <Fragment>
                    <h3 className="sign-in-fail-message">Email or password is incorrect. Please try again.</h3>
                    <h3 className="sign-in-header">Sign in your Saige account</h3>
                    <form onSubmit={handleSubmit(this.userSignIn)}>
                        <Field name="email" label="Email" component={renderInput} type="text" />
                        <Field name="password" label="Password" component={renderInput} type="password" />
                        <button className="sign-in-btn">Sign In</button>
                        <div className="sign-up-option"> Don't have an account? <Link className="sign-up-link" to="/sign-up">Sign Up</Link></div>
                        <p className="auth-error-text">{authError}</p>
                    </form>
                </Fragment>
            } else {
                return <Fragment>
                    <h3 className="sign-in-header">Sign in your Saige account</h3>
                    <form onSubmit={handleSubmit(this.userSignIn)}>
                        <Field name="email" label="Email" component={renderInput} type="text" />
                        <Field name="password" label="Password" component={renderInput} type="password" />
                        <button className="sign-in-btn">Sign In</button>
                        <div className="sign-up-option"> Don't have an account? <Link className="sign-up-link" to="/sign-up">Sign Up</Link></div>
                        <p className="auth-error-text">{authError}</p>
                    </form>
                </Fragment>
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
})(SignIn);
