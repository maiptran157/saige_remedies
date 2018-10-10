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
                    <Field name="Email" label="Email" component={renderInput} type="text"/>   
                    <Field name="Password" label="Password" component={renderInput} type="password"/>           
                    <Field name="Confirm Password" label="Confirm Password" component={renderInput} type="password"/>           
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'sign-up',
})(SignUp);
