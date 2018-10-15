import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getSymptom } from '../../actions';
import { renderInput } from '../helper';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';
import './symptom_check.scss';

class SymptomCheck extends Component {
    getSymptomFromUserInput = (userInput) => {
        this.props.getSymptom(userInput);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Header logo={backButton} buttonType="back-button" />
                <div className="symptom-check-container">
                    <form onSubmit={handleSubmit(this.getSymptomFromUserInput)}>
                        <Field name="userInput" component={renderInput} />
                    </form>
                </div>
            </div>
        )
    }
}

SymptomCheck = reduxForm({
    form: 'get_symptom'
})(SymptomCheck);

export default connect(null, {
    getSymptom: getSymptom
})(SymptomCheck);