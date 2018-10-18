import './condition_container.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AilmentContainer from '../ailment_container';
import { getConditionsList } from '../../actions/index';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

class ConditionsContainer extends Component {
    componentDidMount() {
        const { categoryId } = this.props.match.params
        this.props.getConditionsList(categoryId);
    }

    render() {
        const { conditions } = this.props;
        const { categoryId } = this.props.match.params;
        const ailments = () => {
            if (!conditions) {
                return null;
            } else {
                return conditions.map((item) => {
                    return <AilmentContainer key={item._id} _id={item._id} name={item.name} categoryId={categoryId} />
                });
            }
        }
        return (
            <div className="condition-container" >
                <Header logo={backButton} buttonType="back-button" />
                {ailments()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        conditions: state.conditions.conditionList
    }
}

export default connect(mapStateToProps, {
    getConditionsList: getConditionsList
})(ConditionsContainer);