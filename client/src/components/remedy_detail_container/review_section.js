import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addReview } from '../../actions';
import { getReviewList } from '../../actions';
import './review_section.scss';
// import StarRating from '../star_rating/star_rating_of _user';
import '../star_rating/star_rating.scss';
import StarRatingComponent from 'react-star-rating-component';
import StarRatingTotal from '../star_rating/star_rating_total';

const textStyle = {
    color: 'grey'
}

class ReviewList extends Component {
    constructor() {
        super();

        this.state = {
            rating: 0
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    componentDidMount() {
        const { id } = this.props;
        this.props.getReviewList(id);
    }

    renderInput(props) {
        console.log("renderInput props:", props);
        const { input, name, type, placeholder, meta: { touched, error } } = props;
        return (
            <input {...input} type={type} className="review-area" autoComplete="off" placeholder={placeholder ? placeholder : null} />
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
        const { rating } = this.state;
        const { reviewList, handleSubmit } = this.props;
        const displayReview = () => {
            if (reviewList.length > 0) {
                return reviewList.map((reviewItem, index) => {

                    return (
                        <ul className="single-review" key={index}>
                            <li>{reviewItem.username}</li>
                            <li><span style={textStyle}>rating: </span>{reviewItem.rating}/5</li>
                            <li>{reviewItem.date_posted}</li>
                            <li className="review-detail">{reviewItem.review}</li>
                        </ul>
                    )
                })
            }
        }

        return (<div>
            <div className="review-header">
                <div>Reviews:</div>
                <span><StarRatingTotal /></span>
            </div>
            <div className="reviews-container">

                {displayReview()}

                <form action="" onSubmit={handleSubmit(this.saveReview)}>
                    <div className="review">
                        <div>
                            <div className="star-rating-area">
                                <div className="star-rating-count">Rating:<span> {rating}</span></div>
                                <StarRatingComponent
                                    name="rating"
                                    starCount={5}
                                    value={rating}
                                    onStarClick={this.onStarClick.bind(this)}
                                />
                            </div>
                        </div>

                        <Field type="text" name="review" component={this.renderInput} placeholder="Leave a review..." />
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
