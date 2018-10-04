import React, { Component } from 'react';
import './condition_container.css';
import AilmentContainer from './ailment_container';
import Header from './header';
import dummyData from '../dummy_data/data';

class ConditionsContainer extends Component {
    render() {
        const listOfConditions = dummyData.map( (condition, index) => {
            return <AilmentContainer key={condition._id} name={condition.name}/>
        });

        return (
            <div className="condition-container">
                <Header/>
                {listOfConditions}
            </div>

        )
    }
}

export default ConditionsContainer;