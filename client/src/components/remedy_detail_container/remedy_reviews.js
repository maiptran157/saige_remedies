import React from 'react';
import './remedy_detail_container.css';
import ReviewList from './review_section';

const RemedyReviews = (props) => {
    return (
        <div className="remedy-reviews-container">
            <ReviewList id={props._id} />
        </div>
    )
}

export default RemedyReviews;
