import React from 'react';
import './remedy_detail_container.css';
import OtherTreatmentNameContainer from './other_treatment_name_container';
import EndingMessage from './end_of_result_message';

const OtherTreatmentsContainer = (props) => {
    return (
        <div className="condition-results-container">
            <div className="other-treatment-result-total-message">
                <span>Other Treatment:
                        <span className="other-treatment-result-total-number">7</span>
                </span>
            </div>
            <div className="remedy-results-group">
                <div className="remedy-results">
                    <OtherTreatmentNameContainer />
                    <EndingMessage />
                </div>
            </div>
        </div>
    )
}

export default OtherTreatmentsContainer;
