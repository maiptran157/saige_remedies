import './condition_container.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AilmentContainer from '../ailment_container';
import { getConditionsList } from '../../actions/index';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

const style = {
    top: '10%',
    textAlign: 'center',
    position: 'fixed',
    color: 'white'
}

class ConditionsContainer extends Component {
    componentDidMount() {
        const { categoryId } = this.props.match.params
        this.props.getConditionsList(categoryId);
    }

    render() {
        console.log("ConditionsContainer:", this.props)
        const { conditions } = this.props;
        const { categoryId } = this.props.match.params;
        const ailments = () => {
            if (!conditions) {
                return null;
            } else {
                if (conditions.Errors) {
                    return <h2 style={style}>
                        We apologize for the inconvenience.
                        <br />
                        The information you are looking for is currently unavailable.
                        <br />
                        Please return to home page.
                    </h2>
                }
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