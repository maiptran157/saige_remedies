import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header';
import { connect } from 'react-redux'
// import { getCategorylist } from '../../actions/index'
import CategoryContainer from '../category_container';
import './umbrella_conditions.css';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';

const CATEGORY_URL = 'http://localhost:8888/c718_findhomeremedies/client/public/api/app.php?request=symptom_category';

class UmbrellaConditions extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        this.getCategoryList(); 
        console.log('Component did mount');
    }

    async getCategoryList() {
        try {
            const response = await axios.get(`${CATEGORY_URL}`);
            this.setState({
                data: response.data,
            })

        } catch(error) {
            console.log(error.message)
        }
    }
    renderInput() {
        const data = this.state;
        
    }
    render() {
        return (
            <div className="categories-container">
                <Header logo={saigeLogo} />
                <div className="categories-content">
                </div>
            </div>
        )
    }
}

export default UmbrellaConditions;