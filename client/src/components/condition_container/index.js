import React, { Component } from 'react';
import './condition_container.css';
import AilmentContainer from '../ailment_container';
import Header from '../header';
import dummyData from '../../dummy_data/data';

class ConditionsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({
            items: dummyData
        });


    }


    render() {
        const { category } = this.props.match.params;
        const { items } = this.state;
        const ailment = () => {
            for (let i = 0; i < items.length; i++) {
                if (category === items[i].name) {
                    const conditionsArray = items[i].conditions;
                    console.log('conditionsArray:', conditionsArray);
                    return conditionsArray.map((item) => {
                        return <AilmentContainer key={item._id} _id={item._id} name={item.name} category={category} />
                    })
                }
            }
        }

        return (
            <div className="condition-container" >
                <Header />
                {ailment()}
            </div>

        )
    }
}

export default ConditionsContainer;