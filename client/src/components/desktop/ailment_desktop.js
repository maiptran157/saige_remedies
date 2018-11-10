import React, { Component } from 'react';
import woodenBackground from '../../assets/images/wood_bg.jpg';
import { getConditionsID } from '../../actions';
import { connect } from 'react-redux';
import { formatPostData } from '../../helpers';
import config from '../../config';
import axios from 'axios';
import './ailment_desktop.css'
import { get } from 'http';



const textStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    textShadow: '2px 2px #000000',
}

const background = {
    backgroundSize: 'cover',
    boxShadow: '0 10px 10px #000'
}

class AilmentDesktop extends Component {
    // state = {
    //     conditionDetail: '',
    // }
    // getConditionID = (id) => {
        
    //     this.getConditionDetail(id);
    //     console.log(this.state.conditionDetail);
        
     
    // }

    // async getConditionDetail(id) {
    //     const dataToSend = formatPostData({ ID: id });
    //     try {
    //         const response = await axios.post(config.CONDITION_DETAILS_URL, dataToSend);

    //         if (response.statusText === "OK") {
    //             this.setState({
    //                 conditionDetail: response.data[0],
    //             })
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         this.setState({
    //             conditionDetail: '',
    //         })
    //     }
    // }

    render() {
        const { getConditionsID,_id, name } = this.props;
        return (
            <div className="ailment-description">
                <div className="ailment">
                    <div onClick={() => getConditionsID(_id)} style={textStyle} className="ailment-name">{name}</div>
                </div>  
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        conditionID: state.conditionID.conditionsID
    }
}

export default connect(mapStateToProps, {
    getConditionsID: getConditionsID
})(AilmentDesktop);