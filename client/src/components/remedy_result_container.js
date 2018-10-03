import React from 'react';
import './condition_detail_container.css';
import RemedyNameContainer from './remedy_name_container';
import EndingMessage from './end_of_result_message';

const RemedyResultsContainer = (props) => {
    // console.log("props for RemedyResultsContainer:", props);
    const { treatment } = props;
    let numberOfResults = treatment.length;
    let remedyName = treatment.map((treatmentInfo, index) => {
        return <RemedyNameContainer key={index} remedyName={treatmentInfo.Herb} />
    })
    return (
        <div className="remedy-results-container">
            <div className="remedy-result-total-message">
                <span>Remedy Results:
                        <span className="remedy-result-total-number"> {numberOfResults}</span>
                </span>
            </div>
            <div className="remedy-results-group">
                <div className="remedy-results">
                    {remedyName}
                    <EndingMessage />
                </div>
            </div>
        </div>
    )
}

export default RemedyResultsContainer;
