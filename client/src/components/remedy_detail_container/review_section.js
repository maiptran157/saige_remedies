import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReviewList } from '../../actions';

class ReviewList extends Component {

    componentDidMount() {
        const { id } = this.props;
        this.props.getReviewList(id);
    }
    render() {
        console.log('======REVIEW LIST PROPS=====', this.props);
        return (<div>
            <div>
                <div className="review">review</div>
                <div>
                    <span>by </span>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>
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
