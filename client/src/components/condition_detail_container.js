import React from 'react';
import './condition_detail_container.css';
import ConditionDetailGroup from './condition_detail_group';
import RemedyResultsContainer from './remedy_result_container';
import Header from './header';

const ConditionDetailContainer = (props) => {
    return (
        <div className="condition-detail-container">
            <Header />
            <ConditionDetailGroup />
            <RemedyResultsContainer />
        </div>
    )
}

export default ConditionDetailContainer;
