import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        // console.log('======REVIEW LIST=====', this.props);
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

export default connect(mapStateToProps, {
    getReviewList: getReviewList
})(ReviewList)
