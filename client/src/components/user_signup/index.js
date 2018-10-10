import React, { Component }from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../helper';
import './user_signup.css';

class SignUp extends Component {
    userSignUp(values) {
        console.log('User Sign Up Info:', values);
    }
    render() {
        console.log("Sign Up Props:", this.props);

        const { handleSubmit } = this.props;
        return (
            <div className="sign-up-container">
                <h1>Sign Up!</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <Field name="firstName" label="First Name" component={renderInput} type="text"/>
                    <Field name="lastName" label="Last Name" component={renderInput} type="text"/>
                    <Field name="email" label="Email" component={renderInput} type="text"/>
                </form>
            </div>
        )
    }
}

// function validate(values) {
//     console.log("Values:", values);
// }

export default reduxForm({
    form: 'sign-up',
    // validate: validate
})(SignUp);