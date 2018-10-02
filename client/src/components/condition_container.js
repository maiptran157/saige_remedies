import React, { Component } from 'react';
import './condition_container.css';
import AilmentContainer from './ailment_container';

class ConditionsContainer extends Component {
    render() {
        return (

            <div className="condition-container">
                <AilmentContainer />
            </div>

        )
    }
}

export default ConditionsContainer;