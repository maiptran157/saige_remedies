import React from 'react';
import './condition_detail_container.css';
import RemedyNameContainer from './remedy_name_container';
import EndingMessage from './end_of_result_message';

const RemedyResultsContainer = (props) => {
    return (
        <div className="remedy-results-container">
            <div className="remedy-result-total-message">
                <span>Remedy Results:
                        <span className="remedy-result-total-number">7</span>
                </span>
            </div>
            <div className="remedy-results-group">
                <div className="remedy-results">
                    <RemedyNameContainer />
                    <EndingMessage />
                </div>
            </div>
        </div>
    )
}

export default RemedyResultsContainer;
