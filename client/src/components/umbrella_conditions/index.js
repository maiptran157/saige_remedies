import React, { Component } from 'react';
import dummyData from '../../dummy_data/data';
import Header from '../header';
import CategoryContainer from '../category_container';
import './umbrella_conditions.css';

class UmbrellaConditions extends Component {
    state = {
        data: dummyData,
    }

    render() {
        const { data } = this.state;

        // console.log(data);
        const conditions = data.map((condition, index) => {
            return <CategoryContainer name={condition.name} key={condition._id} category={condition.category} />

        });

        return (
            <div className="categories-container">
                <Header />
                <div className="categories-content">
                    {conditions}
                </div>
            </div>
        )
    }
}

export default UmbrellaConditions;