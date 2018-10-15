import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header';
import { connect } from 'react-redux'
import { getCategoryList } from '../../actions/index'
import CategoryContainer from '../category_container';
import './umbrella_conditions.css';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';

const CATEGORY_URL = 'http://localhost:8888/c718_findhomeremedies/client/public/api/app.php?request=symptom_category';

class UmbrellaConditions extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        this.props.getCategoryList();
    }

    renderInput() {

    }
    render() {
        console.log('Category Name:', this.props.categories)
        return (
            <div className="categories-container">
                <Header logo={saigeLogo} />
                <div className="categories-content">
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.category.categoryName.data);
    return {
        categories: state.category.categoryName.data
    }
}

export default connect(mapStateToProps, {
    getCategoryList: getCategoryList
})(UmbrellaConditions);