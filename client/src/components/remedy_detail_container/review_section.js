import React, { Component, Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addReview, getReviewList } from '../../actions';
import './review_section.scss';
import '../star_rating/star_rating.scss';
import '../star_rating/star_rating.scss';
import StarRatingComponent from 'react-star-rating-component';

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

    componentDidMount() {
        const { id } = this.props;
        this.props.getReviewList(id);
    }

    renderInput(props) {
        const { input, title, name, type, meta: { touched, error } } = props;
        return (
            <Fragment>
                <label style={textStyle}>{title}</label>
                <input {...input} type={type} className="review-area" autoComplete="off" />
            </Fragment>
        )

    }


    validateUserLogInAndAddReview = async (value) => {
        console.log("auth for validateUserLogIn:", this.props.auth);
        if (this.props.auth === false) {
            localStorage.setItem('redirectUrl', this.props.pathname);
            this.props.push('/sign-in');
        } else {
            const { id } = this.props;
            await this.props.addReview({
                review: value.review,
                rating: this.state.rating,
                id: id
            })
            this.props.getReviewList(id);
            this.props.reset(); //clear form
            this.setState({
                rating: 0 //set rating for input back to 0
            })
        }
    }

    render() {
        const { rating } = this.state;
        const { reviewList, handleSubmit } = this.props;

        console.log('Review List:', reviewList);

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
                rating += parseInt(reviewList[i].rating);
            }
            let starAverage = Math.floor(rating / reviewList.length)
            console.log("Rating:", rating)
            console.log("Review List Length:", reviewList.length)
            console.log("Star Average:", starAverage)
            return (
                <div className="star-rating-total">
                    <StarRatingComponent
                        name="rate1"
                        editing={false}
                        starCount={5}
                        value={starAverage}
                    />
                </div>
            );
        }

        return (<div>
            <div className="review-header">
                <div>Average Rating:</div>
                {reviewList ? displayRatingTotal() : null}
            </div>
            <div className="reviews-container">

                {reviewList ? displayReview() : null}

                <form action="" onSubmit={handleSubmit(this.validateUserLogInAndAddReview)}>
                    <div className="review">
                        <div>
                            <div className="star-rating-area">
                                <div className="star-rating-count">Rate this remedy:</div>
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
        reviewList: state.list.reviewList,
        review: state.list.review,
        auth: state.user.auth
    }
}

ReviewList = reduxForm({
    form: 'add_review',
})(ReviewList);

export default connect(mapStateToProps, {
    getReviewList: getReviewList,
    addReview: addReview
})(ReviewList)
