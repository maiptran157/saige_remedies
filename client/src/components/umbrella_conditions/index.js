import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header';
import { connect } from 'react-redux'
import { getCategoryList } from '../../actions/index'
import CategoryContainer from '../category_container';
import './umbrella_conditions.scss';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';

class UmbrellaConditions extends Component {
    componentDidMount() {
        this.props.getCategoryList();
    }

    render() {
        const { categories, history } = this.props;
        const categoryList = () => {
            if (!categories) {
                return null;
            } else {

                return categories.map((category) => {
                    return <CategoryContainer id={category._id} img={category.img} key={category._id} name={category.name} />
                });

            }
        }
        return (
            <div className="categories-container">
                <Header push={history.push} logo={saigeLogo} />
                <div className="categories-content">
                    {categoryList()}
                </div>
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
})(UmbrellaConditions);