import React, { Component, Fragment } from 'react';
import './remedy_detail_container.css';
import RemedyDetailGroup from './remedy_detail_group';
import RemedyReviews from './remedy_reviews';
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
            if (response.statusText === "OK") {
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
        const { remedy_id, remedy, note, caution, ingredients, reviews } = remedyDetail;
        const { history } = this.props
        const displayRemedyDesc = () => {
            if (!remedy) {
                return <div style={style}>
                    <ReactLoading type="bubbles" />
                </div>
            }
            return <Fragment>
                {ingredients ? remedyName() : null}
                <RemedyReviews _id={remedy_id} reviews={reviews} push={this.props.history.push} pathname={this.props.location.pathname} />
            </Fragment>
        }

        const remedyName = () => {
            let ingredientsString = "";
            let matchRegex = / \(([^\)]+)\)/gm;
            if (ingredients.length === 1) {
                ingredientsString = ingredients[0].ingredient.replace(matchRegex, "");
            } else {
                for (let i = 0; i < ingredients.length; i++) {
                    if (i === ingredients.length - 1) {
                        ingredientsString += `and ${ingredients[i].ingredient.replace(matchRegex, "")}`
                    } else if (i === ingredients.length - 2) {
                        ingredientsString += `${ingredients[i].ingredient.replace(matchRegex, "")} `
                    } else {
                        ingredientsString += `${ingredients[i].ingredient.replace(matchRegex, "")}, `
                    }
                }
            }
            return <RemedyDetailGroup name={ingredientsString} remedyDesc={remedy} note={note} caution={caution} />
        }

        return (
            <div className="remedy-detail-container">
                <Header push={history.push} logo={saigeLogo} />
                {displayRemedyDesc()}
            </div>
        )
    }
}

export default RemedyDetailContainer;
