import React, { Component, Fragment } from 'react';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { userSignUpInfo, userSignUpCheck } from '../../actions';
import { renderInput } from '../helper';
import { Link } from 'react-router-dom';
import './user_signup.css';

class SignUp extends Component {
    userSignUp = async (values) => {
        console.log('User Sign Up Info:', values);
        await this.props.userSignUpCheck(values);
        if (!this.props.signUpCheckMessage.userExists) {
            this.props.userSignUpInfo(values);
        }
    }
    render() {
        const { handleSubmit, authError } = this.props;
        console.log("SignUp props:", this.props);
        const renderField = () => {
            return <Fragment>
                <h3 className="sign-up-header">Create your Saige account</h3>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <Field name="firstName" label="First name" component={renderInput} type="text" />
                    <Field name="lastName" label="Last name" component={renderInput} type="text" />
                    <Field name="username" label="Username" component={renderInput} type="text" />
                    <Field name="email" label="Email" component={renderInput} type="text" />
                    <Field name="password" label="Password" component={renderInput} type="password" />
                    <Field name="confirmPassword" label="Re-enter your password" component={renderInput} type="password" />
                    <button className="sign-up-btn">Sign Up</button>
                    <div className="sign-in-option"> Already have an account? <Link className="sign-in-link" to="/sign-in">Sign In</Link></div>
                    <p className="auth-error-text">{authError}</p>
                </form>
            </Fragment>
        }
        const goBackHome = () => {
            setTimeout(() => {
                this.props.history.push('/sign-in')
            }, 1000)
        }
        if (this.props.auth) {
            return <div className="sign-up-container">
                <Header logo={saigeLogo} buttonType="back-button" />
                <div className="sign-up-success-message">
                    You have successfully created an account
                    {goBackHome()}
                </div>
            </div>
        } else if (this.props.signUpCheckMessage.userExists) {
            return (
                <div className="sign-up-container">
                    <Header logo={saigeLogo} buttonType="back-button" />
                    <div className="sign-up-section">
                        <h3 className="sign-up-fail-message">An account is registered under this email. Please use a different email.</h3>
                        {renderField()}
                    </div>
                </div>
            )
        } else if (!this.props.auth && this.props.submitSucceeded) {
            return (
                <div className="sign-up-container">
                    <Header logo={saigeLogo} buttonType="back-button" />
                    <div className="sign-up-section">
                        <h3 className="sign-up-fail-message">There was a problem trying to create your account. Please try again.</h3>
                        {renderField()}
                    </div>
                </div>
            )
        }

        return (
            <div className="sign-up-container">
                <Header logo={saigeLogo} buttonType="back-button" />
                <div className="sign-up-section">
                    {renderField()}
                </div>
            </div>
        )
    }
}

const validate = values => {
    const { firstName, lastName, username, email, password, confirmPassword } = values;
    // console.log(values);
    const errors = {};
    if (!firstName) {
        errors.firstName = "Please enter your first name.";
    }
    if (!lastName) {
        errors.lastName = "Please enter your last name.";
    }
    if (!username) {
        errors.username = "Please choose your username";
    }
    if (!email) {
        errors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    if (!password) {
        errors.password = "Please enter your password";
    }
    if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }
    return errors;
}

SignUp = reduxForm({
    form: 'get_user_sign_up_info',
    form: 'check_user_sign_up_info_success',
    validate: validate
})(SignUp);

function mapStateToProps(state) {
    return {
        auth: state.user.auth,
        authError: state.user.signUpError,
        signUpCheckMessage: state.user.signUpCheckMessage
    }
}

export default connect(mapStateToProps, {
    userSignUpInfo: userSignUpInfo,
    userSignUpCheck: userSignUpCheck
})(SignUp);
