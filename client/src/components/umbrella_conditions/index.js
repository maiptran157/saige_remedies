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
        console.log(data);
        const category = data.map((category, index) => {
            return <CategoryContainer name={category.name} key={index} conditions={category.conditions} img={category.img} />
        });

        return (
            <div className="categories-container">
                <Header />
                <div className="categories-content">
                    {category}
                </div>
            </div>
        )
    }
}

export default UmbrellaConditions;