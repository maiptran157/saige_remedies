import React, { Component } from 'react';
import './condition_detail_container.css';
import ConditionDetailGroup from './condition_detail_group';
import RemedyResultsContainer from './remedy_result_container';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';
import axios from 'axios';
import config from '../../config';
import { formatPostData } from '../../helpers';

class ConditionDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conditionDetail: []
        }
    }

    componentDidMount() {
        this.getConditionDetail();
    }

    async getConditionDetail() {
        const { match: { params } } = this.props;
        const { category, conditionId } = params;
        console.log("category:", category);
        console.log("conditionId:", conditionId);

        const dataToSend = formatPostData({ ID: 10071 });

        // axios.get('/api/something?ID=4&more=stuff', {
        //     params:  {
        //         ID: 4
        //     }
        // })

        try {
            const response = await axios.post(config.CONDITION_DETAILS_URL, dataToSend);
            console.log("response:", response);
            this.setState({
                conditionDetail: response
            })
        } catch (error) {
            this.setState({
                conditionDetail: []
            })
        }
    }

    render() {

        return (
            <div className="condition-detail-container">
                <Header logo={backButton} buttonType="back-button" />
                {/* <ConditionDetailGroup name={name} description={description} self_help={self_help} caution={caution} />
            <RemedyResultsContainer treatment={treatment} /> */}
            </div>
        )
    }

}

export default ConditionDetailContainer;
