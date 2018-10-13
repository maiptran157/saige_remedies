import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addReview } from '../../actions';
import { getReviewList } from '../../actions';
import './review_section.scss';

const textStyle = {
    color: 'grey'
}

class ReviewList extends Component {
    componentDidMount() {
        const { id } = this.props;
        this.props.getReviewList(id);
    }

    renderInput(props) {
        console.log("renderInput props:", props);
        const { input, name, type, placeholder, meta: { touched, error } } = props;
        if (type === "text") {
            return (
                <input {...input} type="text" className="review-area" autoComplete="off" placeholder={placeholder ? placeholder : null} />
            )
        } else if (type === "number") {
            return (
                <input {...input} type="number" className="rating-area" />
            )
        }

    }

    saveReview = (values) => {
        console.log("Form Values:", values);
        this.props.addReview(values);
        const { id } = this.props;
        this.props.getReviewList(id);
    }

    render() {
        const { reviewList, handleSubmit } = this.props;
        // console.log("reviewList:", reviewList);
        const displayReview = () => {
            if (reviewList.length > 0) {
                return reviewList.map((reviewItem, index) => {
                    console.log("reviewItem:", reviewItem)
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
            </div>
            <div className="reviews-container">

                {displayReview()}

                <form action="" onSubmit={handleSubmit(this.saveReview)}>
                    <div className="review">
                        <div>
                            <span>Rating:</span><Field type="number" name="rating" component={this.renderInput} />
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
