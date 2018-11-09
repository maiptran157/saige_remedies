import React, { Component, Fragment } from 'react';
import InputBar from '../header/input_bar';
import { getCategoryList } from '../../actions/index';
import CategoryContainer from '../category_container';
import { connect } from 'react-redux';
import './home_page.css';

class HomePage extends Component {
    state = {
        showLess: true,
    }

    componentDidMount() {
        this.props.getCategoryList();
    }

    renderInDesktop() {
        const { categories } = this.props;

        return categories.slice(0, 3).map( (category) => {
            return (
            <Fragment>
                <CategoryContainer id={category._id} img={category.img} key={category._id} name={category.name} /> 
            </Fragment>
        )});
    }

    renderAllCategories() {
        const { categories } = this.props;

        return categories.slice(0,11).map( (category) => {
            return <CategoryContainer id={category._id} img={category.img} key={category._id} name={category.name}/>
        });
    }

    toggleShowMore = (event) => {
        event.preventDefault();

        this.setState({
            showLess: !this.state.showLess
        });

    }
    render() {
        return (
            <div className="home-container">
                <InputBar push={this.props.push}/>
                <div className="categories">
                    {this.state.showLess ? this.renderInDesktop() : this.renderAllCategories()}
                    <div className="show-more" onClick={this.toggleShowMore}>{this.state.showLess ? "More Categories" : "Less Categories"}</div>

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