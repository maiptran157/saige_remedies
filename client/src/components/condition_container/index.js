import React, { Component } from 'react';
import './condition_container.css';
import AilmentContainer from '../ailment_container';
import Header from '../header';
import dummyData from '../../dummy_data/data';

class ConditionsContainer extends Component {


    render() {
        const { category } = this.props.match.params;
        // console.log("Category:", category)
        const filteredConditions = dummyData.map((item, index) => {
            // console.log('Dummy Data Category:', item['category']);
            if (category === item['category']) {
                console.log('Condition Name:', item.name);
                return <AilmentContainer key={item._id} _id={item._id} name={item.name} category={item.category} />
            }

        });

        return (
            <div className="condition-container">
                <Header />
                {filteredConditions}
            </div>

        )
    }
}

export default ConditionsContainer;