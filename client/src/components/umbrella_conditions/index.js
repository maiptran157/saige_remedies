import React, { Component } from 'react';
import dummyData from '../../dummy_data/data';
import Header from '../header';
import CategoryContainer from '../category_container';
import './umbrella_conditions.css';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';

class UmbrellaConditions extends Component {
    state = {
        data: dummyData,
    }

    render() {
        const { data } = this.state;
        const category = data.map((category, index) => {
            return <CategoryContainer name={category.name} key={index} conditions={category.conditions} img={category.img} />
        });

        return (
            <div className="categories-container">
                <Header logo={saigeLogo} />
                <div className="categories-content">
                    {category}
                </div>
            </div>
        )
    }
}

export default UmbrellaConditions;