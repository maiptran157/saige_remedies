import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getReviewList } from '../../actions';


class ReviewList extends Component {
    componentDidMount() {
        this.props.getReviewList();
    }
    render() {
        console.log(this.props);


        return (<div>
            review list here
        </div>
        )
    }
}

export default connect(null, {
    getReviewList: getReviewList
})(ReviewList)
