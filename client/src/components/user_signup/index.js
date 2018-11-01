import React, { Component } from 'react';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { userSignUpInfo } from '../../actions';
import { renderInput } from '../helper';
import { Link } from 'react-router-dom';
import './user_signup.css';

class SignUp extends Component {
    userSignUp = (values) => {
        console.log('User Sign Up Info:', values);
        this.props.userSignUpInfo(values);
    }
    render() {
        const { handleSubmit, authError } = this.props;
        return (
            <div className="sign-up-container">
                <Header logo={saigeLogo} buttonType="back-button" />
                <div className="sign-up-section">
                    <h1 className="sign-up-header">Sign Up</h1>
                    <form onSubmit={handleSubmit(this.userSignUp)}>
                        <Field name="firstName" label="First Name:" component={renderInput} type="text" />
                        <Field name="lastName" label="Last Name:" component={renderInput} type="text" />
                        <Field name="username" label="User Name" component={renderInput} type="text" />
                        <Field name="email" label="Email:" component={renderInput} type="text" />
                        <Field name="password" label="Password:" component={renderInput} type="password" />
                        <Field name="confirmPassword" label="Confirm Password:" component={renderInput} type="password" />
                        <button>Sign Up</button>
                        <br /><br />
                        <Link to="/sign-in">Sign In</Link>
                        <p className="auth-error-text">{authError}</p>
                    </form>
                </div>
            </div>
        )
    }
}

const validate = values => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    console.log(values);
    const errors = {};
    if (!firstName) {
        errors.firstName = "Please enter your first name.";
    }
    if (!lastName) {
        errors.lastName = "Please enter your last name.";
    }
    if (!email) {
        errors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    if (password !== confirmPassword) {
        errors.password = "Passwords do not match";
    }
    return errors;
}

SignUp = reduxForm({
    form: 'get_user_sign_up_info',
    validate: validate
})(SignUp);

function mapStateToProps(state) {
    return {
        authError: state.user.signUpError
    }
}

export default connect(mapStateToProps, {
    userSignUpInfo: userSignUpInfo,
})(SignUp);
