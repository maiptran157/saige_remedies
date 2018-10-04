import React, { Component }from 'react';
import dummyData from './dummdata'
import Header from './header';
import './umbrella_conditions.css';

class UmbrellaConditions extends Component {
    render() {
        return (
            <div className="umbrella">
                <Header/>
                <div className="umbrella-conditions">
                    <div className="umbrella-category">
                        <div className="category-name"></div>
                        <div className="category-name"></div>
                    </div>
                    <div className="umbrella-category">
                        <div className="category-name"></div>
                        <div className="category-name"></div>
                    </div>
                    <div className="umbrella-category">
                        <div className="category-name"></div>
                        <div className="category-name"></div>
                    </div>
                    <div className="umbrella-category">
                        <div className="category-name"></div>
                        <div className="category-name"></div>
                    </div>
                    <div className="umbrella-category">
                        <div className="category-name"></div>
                        <div className="category-name"></div>
                    </div>
                    <div className="umbrella-category">
                        <div className="category-name"></div>
                        <div className="category-name"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UmbrellaConditions;