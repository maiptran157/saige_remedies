import React, { Component, Fragment } from 'react';
import './condition_detail_container.css';
import ConditionDetailGroup from './condition_detail_group';
import RemedyResultsContainer from './remedy_result_container';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import axios from 'axios';
import config from '../../config';
import { formatPostData } from '../../helpers';
import ReactLoading from 'react-loading';

const style = {
    display: 'flex',
    justifyContent: 'center'
}

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
        const { conditionId } = params;

        const dataToSend = formatPostData({ ID: conditionId });
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
            });
        }
    }

    render() {
        const { conditionDetail } = this.state;
        const { name, description, caution, self_help, treatment } = conditionDetail;
        const { history } = this.props;

        const displayConditionDesc = () => {
            if (!description) {
                return <div style={style} >
                    <ReactLoading type="bubbles" />
                </div>
            }
            return <Fragment>
                <ConditionDetailGroup push={history.push} name={name} description={description} self_help={self_help} caution={caution} />
                <RemedyResultsContainer symptomName={name} treatment={treatment} />
            </Fragment>
        }
        return (
            <div className="condition-detail-container">
                <Header push={history.push} logo={saigeLogo} />
                {displayConditionDesc()}
            </div>
        )
    }
}

export default ConditionDetailContainer;
