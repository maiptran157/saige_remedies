import React from 'react';
import './remedy_detail_container.css';
import ReviewList from './review_section';

const RemedyReviews = (props) => {
    return (
        <div className="remedy-reviews-container">
            <ReviewList push={props.push} pathname={props.pathname} id={props._id} reviews={props.reviews} />
        </div>
    )
}

export default RemedyReviews;
