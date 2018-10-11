import React, { Component }from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../helper';
// import { signUp } from '../../actions/index';
import './user_signup.css';

class SignUp extends Component {
    userSignUp(values) {
        console.log('User Sign Up Info:', values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="sign-up-container">
                <h1 className="sign-up-header">Sign Up!</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <Field name="firstName" label="First Name" component={renderInput} type="text"/>           
                    <Field name="lastName" label="Last Name" component={renderInput} type="text"/>           
                    <Field name="email" label="Email" component={renderInput} type="text"/>   
                    <Field name="password" label="Password" component={renderInput} type="password"/>           
                    <Field name="confirmPassword" label="Confirm Password" component={renderInput} type="password"/>           
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

const validate = values => {
    const { firstName, lastName, email, password, confirmPassword} = values;
    const errors = {};
    console.log(firstName);
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


export default reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);
