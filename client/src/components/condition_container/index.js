import React, { Component } from 'react';
import './condition_container.css';
import AilmentContainer from '../ailment_container';
import Header from '../header';
import dummyData from '../../dummy_data/data';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

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
        console.log(this.props.match.params.categoryId);
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
                <Header logo={backButton} buttonType="back-button" />
                {ailment()}
            </div>

        )
    }
}

export default ConditionsContainer;