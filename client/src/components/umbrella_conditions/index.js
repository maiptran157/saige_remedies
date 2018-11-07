import React, { Component } from 'react';
import Header from '../header';
import { connect } from 'react-redux'
import { getCategoryList } from '../../actions/index'
import CategoryContainer from '../category_container';
import AgreementModal from '../modal';
import './umbrella_conditions.scss';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import MediaQuery from "react-responsive";


class UmbrellaConditions extends Component {
    state = {
        modalCheck: localStorage.getItem('loggedin'),
    }

    componentDidMount() {
        this.props.getCategoryList();
    }

    render() {
        const { modalCheck } = this.state;
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
                {modalCheck ? null : <AgreementModal/> }
                <Header push={history.push} logo={saigeLogo} />
                <div className="categories-content">
                    {categoryList()}
                </div>
                <MediaQuery>
                    
                </MediaQuery>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.category.categories,
    }
}

export default connect(mapStateToProps, {
    getCategoryList: getCategoryList
})(UmbrellaConditions);