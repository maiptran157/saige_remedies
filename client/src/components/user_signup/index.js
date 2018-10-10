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
        console.log('Sign Up:', this.props);

        const { handleSubmit } = this.props;
        return (
            <div className="sign-up-container">
                <h1 className="sign-up-header">Sign Up!</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <Field name="first-name" label="First Name" component={renderInput} type="text"/>                </form>
            </div>
        )
    }
}
export default reduxForm({
    form: 'sign-up',
})(SignUp);
