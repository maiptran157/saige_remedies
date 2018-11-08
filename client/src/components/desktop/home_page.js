import React, { Component } from 'react';
import InputBar from '../header/input_bar';
import { getCategoryList } from '../../actions/index';
import { connect } from 'react-redux';
import './home_page.css';

class HomePage extends Component {
    componentDidMount() {
        this.props.getCategoryList();
    }

    render() {
        return (
            <div className="home-container">
                <InputBar push={this.props.push}/>
            </div>
        )
    }
}

function mapStateToProps(state) { 
    return {
        categories: state.category.categories
    }
}

export default connect(mapStateToProps, {
    getCategoryList: getCategoryList
})(HomePage);