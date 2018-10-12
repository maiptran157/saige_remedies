import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getReviewList } from '../../actions';
import './review_section.scss'

const textStyle = {
    color: 'grey'
}

class ReviewList extends Component {
    componentDidMount() {
        const { id } = this.props;
        this.props.getReviewList(id);
    }
    render() {
        const { reviewList } = this.props;
        console.log("reviewList:", reviewList);
        const review = () => {
            if (reviewList.length > 0) {
                return reviewList.map((reviewItem, index) => {
                    console.log("reviewItem:", reviewItem)
                    return (
                        <ul className="review" key={index}>
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
            </div>
            <div className="reviews-container">

                {review()}

                <form action="">
                    <textarea name="" placeholder="Leave a review..."></textarea>
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
    getReviewList: getReviewList
})(ReviewList)
