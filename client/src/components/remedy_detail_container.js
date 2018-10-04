import React from 'react';
import './remedy_detail_container.css';
import RemedyDetailGroup from './remedy_detail_group';
import OtherTreamentsContainer from './other_treatments_container';
import Header from './header';
import dummyData from '../dummy_data/data_for_remedy_detail';

const RemedyDetailContainer = (props) => {
    console.log("props for RemedyDetailContainer:", props);
    const { remedyId } = props.match.params;
    const remedyDetail = {};
    for (let dummyIndex = 0; dummyIndex < dummyData.length; dummyIndex++) {
        if (dummyData[dummyIndex]._id === remedyId) {
            remedyDetail = dummyData[dummyIndex]
        }
    }
    return (
        <div className="condition-detail-container">
            <Header />
            <RemedyDetailGroup />
            <OtherTreamentsContainer />
        </div>
    )
}

export default RemedyDetailContainer;
