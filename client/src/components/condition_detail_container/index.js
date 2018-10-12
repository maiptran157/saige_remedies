import React from 'react';
import './condition_detail_container.css';
import ConditionDetailGroup from './condition_detail_group';
import RemedyResultsContainer from './remedy_result_container';
import Header from '../header';
import dummyData from '../../dummy_data/data_for_condition_detail';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

const ConditionDetailContainer = (props) => {
    // console.log(props);
    const { match: { params } } = props;
    const { category, conditionId } = params;
    // console.log("category:", category);
    // console.log("conditionId:", conditionId)
    // console.log("dummyData:", dummyData);
    const filteredData = () => {
        for (let dummyIndex = 0; dummyIndex < dummyData.length; dummyIndex++) {
            if (dummyData[dummyIndex].category === category && dummyData[dummyIndex]._id === conditionId) {
                return dummyData[dummyIndex];
            }
        }
    }

    const filteredDataObj = filteredData();
    const { name, description, self_help, caution, treatment } = filteredDataObj;
    return (
        <div className="condition-detail-container">
            <Header logo={backButton} buttonType="back-button" />
            <ConditionDetailGroup name={name} description={description} self_help={self_help} caution={caution} />
            <RemedyResultsContainer treatment={treatment} />
        </div>
    )
}

export default ConditionDetailContainer;
