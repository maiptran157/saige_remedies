import React, { Component } from 'react';
import './remedy_detail_container.css';
import RemedyDetailGroup from './remedy_detail_group';
import RemedyReviews from './remedy_reviews';
import Header from '../header';
// import dummyData from '../../dummy_data/data_for_remedy_detail';
import backButton from '../../assets/images/back_arrow_white_shadow.png';
import axios from 'axios';
import config from '../../config';
import { formatPostData } from '../../helpers';

class RemedyDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remedyDetail: {}
        }
    }

    componentDidMount() {
        this.getRemedyDetail();
    }

    async getRemedyDetail() {
        const { remedyId } = this.props.match.params;
        const dataToSend = formatPostData({ ID: remedyId });
        try {
            const response = await axios.post(config.REMEDY_DETAIL_URL, dataToSend);
            // console.log("response from axios call:", response)
            if (response.statusText === "OK") {
                // console.log('Response Made it here');
                this.setState({
                    remedyDetail: response.data,

                })
            }

        } catch (error) {
            this.setState({
                remedyDetail: {}
            })
        }

    }

    render() {
        const { remedyDetail } = this.state;
        // console.log("remedyDetail:", remedyDetail);
        const { remedy_id, remedy, note, caution, ingredients, reviews } = remedyDetail;
        const remedyName = () => {
            let ingredientsString = "";
            let matchRegex = / \(([^\)]+)\)/gm;
            if (ingredients.length === 1) {
                ingredientsString = ingredients[0].ingredient.replace(matchRegex, "");
            } else {
                for (let i = 0; i < ingredients.length; i++) {
                    if (i === ingredients.length - 1) {
                        ingredientsString += `and ${ingredients[i].ingredient.replace(matchRegex, "")}`
                    } else {
                        ingredientsString += `${ingredients[i].ingredient.replace(matchRegex, "")} `
                    }
                }
            }
            return <RemedyDetailGroup name={ingredientsString} remedyDesc={remedy} note={note} caution={caution} />
        }

        return (
            <div className="condition-detail-container">
                <Header logo={backButton} buttonType="back-button" />
                {ingredients ? remedyName() : null}
                <RemedyReviews _id={remedy_id} reviews={reviews} />
            </div>
        )
    }

}

export default RemedyDetailContainer;
