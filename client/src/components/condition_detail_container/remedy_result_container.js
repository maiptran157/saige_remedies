import React from 'react';
import './condition_detail_container.css';
import RemedyNameContainer from './remedy_name_container';

const RemedyResultsContainer = (props) => {
    const { treatment } = props;
    let numberOfResults = treatment.length;
    let remedyName = treatment.map((treatmentInfo, index) => {
        console.log("treatmentInfo:", treatmentInfo)
        return <RemedyNameContainer
            key={index}
            _id={treatmentInfo._id}
            name={treatmentInfo.Herb}
        />
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
                    <div className="end-of-result-message">End of results</div>
                </div>
            </div>
        </div>
    )
}

export default RemedyResultsContainer;
