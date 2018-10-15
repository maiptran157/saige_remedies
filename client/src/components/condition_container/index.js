import './condition_container.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AilmentContainer from '../ailment_container';
import { getConditionsList } from '../../actions/index'; 
import Header from '../header';
import dummyData from '../../dummy_data/data';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

class ConditionsContainer extends Component {
    componentDidMount() {

    }

    render() {
        // const { items } = this.state;
        console.log(this.props.match.params.categoryId);
        return (
            <div className="condition-container" >
                <Header logo={backButton} buttonType="back-button" />
                {/* {ailment()} */}
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state);
}

export default connect(mapStateToProps, {
    getConditionsList: getConditionsList
})(ConditionsContainer) ;