import './user_signin.css';
import React, { Component } from 'react';
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
        //check if there's a past route
        const url = localStorage.getItem('redirectUrl');
        const loggedin = localStorage.getItem('loggedin') === 'true';
        console.log('SignIn props:', this.props);
        if (url && loggedin) {
            localStorage.removeItem('redirectUrl');
            return this.props.history.push(url);
        } else if (loggedin) {
            return this.props.history.push("/");
        }
        this.props.reset();
    }

    render() {
        const { handleSubmit, authError } = this.props;
        return (
            <div className="sign-in-container">
                <Header logo={saigeLogo} />
                <div className="sign-in-section">
                    <h1 className="sign-in-header">Sign In</h1>
                    <form onSubmit={handleSubmit(this.userSignIn)}>
                        <Field name="email" label="Email" component={renderInput} type="text" />
                        <Field name="password" label="Password" component={renderInput} type="password" />
                        <button>Sign In</button>
                        <br /><br />
                        <Link to="/sign-up">Sign Up</Link>
                        <p className="auth-error-text">{authError}</p>
                    </form>
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
