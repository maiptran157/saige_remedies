import './user_signin.css';
import React, { Component }from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { userSignInInfo } from '../../actions';
import { renderInput } from '../helper';

class SignIn extends Component {
    userSignIn = (values) => {
        this.props.userSignInInfo(values);
    }

    render() {
        const { handleSubmit, authError } = this.props;
        return (
            <div className="sign-in-container">
                <h1 className="sign-in-header">Sign In!</h1>
                <form onSubmit={handleSubmit(this.userSignIn)}>
                    <Field name="email" label="Email" component={renderInput} type="text"/>
                    <Field name="password" label="Password" component={renderInput} type="password"/>
                    <button>Sign In</button>
                    <p className="auth-error-text">{ authError }</p>
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


SignIn = reduxForm({
    form: 'get_user_sign_in_info',
    validate: validate
})(SignIn); 

function mapStateToProps(state) {
    return {
        authError: state.user.signInError
    }
}

export default connect(mapStateToProps, {
    userSignInInfo: userSignInInfo,
})(SignIn);
