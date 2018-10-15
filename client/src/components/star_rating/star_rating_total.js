import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './star_rating.scss';
import dummyReviewList from '../../dummy_data/data_for_remedy_review';

class StarRatingTotal extends Component {
  calculateStarRating = () => {
    let rating = 0;
    for (let i = 0; i < dummyReviewList.reviews.length; i++) {
      rating += dummyReviewList.reviews[i].rating;
    }
    return Math.floor(rating / dummyReviewList.reviews.length)
  }

  render() {
    return (
      <div className="star-rating-total">
        <StarRatingComponent
          name="rate1"
          editing={false}
          starCount={5}
          value={this.calculateStarRating()}
        />
      </div>
    );
  }
}

export default StarRatingTotal;

