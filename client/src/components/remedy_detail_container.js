import React from 'react';
import './remedy_detail_container.css';
import RemedyDetailGroup from './remedy_detail_group';
import OtherTreamentsContainer from './other_treatments_container';

const RemedyDetailContainer = (props) => {
    return (
        <div className="condition-detail-container">
            <RemedyDetailGroup />
            <OtherTreamentsContainer />
        </div>
    )
}

export default RemedyDetailContainer;
