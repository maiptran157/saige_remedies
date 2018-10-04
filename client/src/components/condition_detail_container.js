import React from 'react';
import './condition_detail_container.css';
import ConditionDetailGroup from './condition_detail_group';
import RemedyResultsContainer from './remedy_result_container';
import Header from './header';
import dummyData from '../dummy_data/data_for_condition_detail';

const ConditionDetailContainer = (props) => {
    // console.log(dummyData);
    const { Name, Description, Self_help, Caution, Treatment } = dummyData;
    return (
        <div className="condition-detail-container">
            <Header />
            <ConditionDetailGroup name={Name} description={Description} self_help={Self_help} caution={Caution} />
            <RemedyResultsContainer treatment={Treatment} />
        </div>
    )
}

export default ConditionDetailContainer;
