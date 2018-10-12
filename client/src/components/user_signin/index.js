import './user_signin.css';
import React, { Component }from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../helper';

class SignIn extends Component {
    userSignIn = (values) => {
        this.props.signIn(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="sign-up-container">
                <h1 className="sign-up-header">Sign In!</h1>
                <form>
                    <Field name="email" label="Email" component={renderInput} type="text"/>
                    <Field name="password" label="Password" component={renderInput} type="password"/>
                    <button>Sign In</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const { email, password } = values;
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email address';
    }
    if (!password) {
        errors.password = 'Please enter your password';
    }
    return errors;
}

export default reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);
