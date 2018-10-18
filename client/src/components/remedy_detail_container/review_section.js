import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addReview } from '../../actions';
import { getReviewList } from '../../actions';
import './review_section.scss';
import '../star_rating/star_rating.scss';
// import StarRating from '../star_rating/star_rating_of _user';
import '../star_rating/star_rating.scss';
import StarRatingComponent from 'react-star-rating-component';
import StarRatingTotal from '../star_rating/star_rating_total';

const textStyle = {
    color: 'white'
}

class ReviewList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 0
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    componentWillReceiveProps() {
        const { id } = this.props;
        this.props.getReviewList(id);
    }

    renderInput(props) {
        console.log("renderInput props:", props);
        const { input, title, name, type, meta: { touched, error } } = props;
        return (
            <Fragment>
                <label style={textStyle}>{title}</label>
                <input {...input} type={type} className="review-area" autoComplete="off" />
            </Fragment>
        )

    }

    saveReview = (value) => {
        // console.log("rating on submit", this.state.rating);
        // console.log("review on submit", value.review);
        this.props.addReview({ review: value.review, rating: this.state.rating });
        const { id } = this.props;
        this.props.getReviewList(id);
    }

    render() {
        console.log("ReviewList props:", this.props)
        const { rating } = this.state;
        const { reviewList, handleSubmit } = this.props;
        const displayReview = () => {
            if (reviewList.length > 0) {
                return reviewList.map((reviewItem, index) => {

                    return (
                        <ul className="single-review" key={index}>
                            <li>{reviewItem.username}</li>
                            <li>rating: <StarRatingComponent name="rate1" editing={false} starCount={5} value={parseInt(reviewItem.rating)} /></li>
                            <li>date: {reviewItem.date_posted}</li>
                            <li className="review-detail">{reviewItem.review}</li>
                        </ul>
                    )
                })
            }
        }

        const displayRatingTotal = () => {
            let rating = 0;
            for (let i = 0; i < reviewList.length; i++) {
                rating += reviewList[i].rating;
            }
            let starTotal = Math.floor(rating / reviewList.length)
            return (
                <div className="star-rating-total">
                    <StarRatingComponent
                        name="rate1"
                        editing={false}
                        starCount={5}
                        value={starTotal}
                    />
                </div>
            );
        }

        return (<div>
            <div className="review-header">
                <div>Total Rating:</div>
                <span>{reviewList ? displayRatingTotal() : null}</span>
            </div>
            <div className="reviews-container">

                {reviewList ? displayReview() : null}

                <form action="" onSubmit={handleSubmit(this.saveReview)}>
                    <div className="review">
                        <div>
                            <div className="star-rating-area">
                                <div className="star-rating-count">Rating:</div>
                                <StarRatingComponent
                                    name="rating"
                                    starCount={5}
                                    value={rating}
                                    onStarClick={this.onStarClick.bind(this)}
                                />
                            </div>
                        </div>

                        <Field type="text" name="review" title="Leave a review:" component={this.renderInput} />
                    </div>

                    <button className="add-review-button">+</button>
                </form>

            </div>
        </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        reviewList: state.list.reviewList
    }
}

ReviewList = reduxForm({
    form: 'add_review',
})(ReviewList);

export default connect(mapStateToProps, {
    getReviewList: getReviewList,
    addReview: addReview
})(ReviewList)
