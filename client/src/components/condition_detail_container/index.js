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
        const { categoryId, conditionId } = params;
        console.log("categoryId:", categoryId);
        console.log("conditionId:", conditionId);

        const dataToSend = formatPostData({ ID: conditionId });

        // axios.get('/api/something?ID=4&more=stuff', {
        //     params:  {
        //         ID: 4
        //     }
        // })

        try {
            const response = await axios.post(config.CONDITION_DETAILS_URL, dataToSend);

            if (response.statusText === "OK") {
                this.setState({
                    conditionDetail: response.data[0]
                })
            }

        } catch (error) {
            this.setState({
                conditionDetail: []
            })
        }
    }

    render() {
        const { conditionDetail } = this.state;
        const { name, description, caution, self_help, treatment } = conditionDetail;
        return (
            <div className="condition-detail-container">
                <Header logo={backButton} buttonType="back-button" />
                <ConditionDetailGroup name={name} description={description} self_help={self_help} caution={caution} />
                <RemedyResultsContainer symptomName={name} treatment={treatment} />
            </div>
        )
    }

}

export default ConditionDetailContainer;
