import React from 'react';
import './remedy_detail_container.css';
import ReviewList from './review_section';

const RemedyReviews = (props) => {
    // console.log("RemedyReviews id:", props._id)
    return (
        <div className="remedy-reviews-container">
            <ReviewList id={props._id} reviews={props.reviews} />
        </div>
    )
}

export default RemedyReviews;
