import React, { Component } from 'react';
import './condition_container.css';
import AilmentContainer from './ailment_container';
import Header from './header';

class ConditionsContainer extends Component {
    render() {
        return (

            <div className="condition-container">
                <Header />
                <AilmentContainer />
            </div>

        )
    }
}

export default ConditionsContainer;