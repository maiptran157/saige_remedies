import React, { Component } from 'react';
import './star_rating.scss';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="star-rating-area">
        <div className="star-rating-count">Rating:<span> {rating}</span></div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default StarRating;