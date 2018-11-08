import React, { Component } from 'react';
import InputBar from '../header/input_bar';
import { getCategoryList } from '../../actions/index';
import CategoryContainer from '../category_container';
import { connect } from 'react-redux';
import './home_page.css';

class HomePage extends Component {
    state = {
        showMore: false,
    }

    componentDidMount() {
        this.props.getCategoryList();
    }

    renderInDesktop() {
        const { categories } = this.props;

        return categories.slice(0, 3).map( (category) => {
            return <CategoryContainer id={category._id} img={category.img} key={category._id} name={category.name} />
        });
    }

    moreCategories() {
        const { categories } = this.props;

        return categories.splice(categories.length-1).map ( (category) => {
            return <CategoryContainer img={category.img} key={category._id} name={"More Categories"}/>
        });
    }
    render() {
        return (
            <div className="home-container">
                <InputBar push={this.props.push}/>
                <div className="categories">
                    {this.renderInDesktop()}
                    {this.moreCategories()}
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
})(HomePage);