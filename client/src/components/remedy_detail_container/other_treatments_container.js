import React from 'react';
import './remedy_detail_container.css';
import ReviewList from './review_section';
// import OtherTreatmentNameContainer from './other_treatment_name_container';

const OtherTreatmentsContainer = (props) => {
    return (
        <div className="condition-results-container">
            <ReviewList />


            {/* <div className="other-treatment-result-total-message">
                <span>Other Treatment:
                        <span className="other-treatment-result-total-number">7</span>
                </span>
            </div>
            <div className="remedy-results-group">
                <div className="remedy-results">
                    <OtherTreatmentNameContainer />
                    <div className="end-of-result-message">End of results</div>
                </div>
            </div> */}
        </div>
    )
}

export default OtherTreatmentsContainer;
