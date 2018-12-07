import './condition_container.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AilmentContainer from '../ailment_container';
import { getConditionsList } from '../../actions/index';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import ReactLoading from 'react-loading';
import upArrow from '../../assets/images/double-up-arrow.svg';

class ConditionsContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { categoryId } = this.props.match.params;
        this.props.getConditionsList(categoryId);
        if (document.getElementsByClassName('symptom-group')[0].scrollHeight <= 700) {
            document.getElementsByClassName("back-to-top-btn")[0].style.display = "none";
        }
    }

    componentDidUpdate() {
        if (document.getElementsByClassName('symptom-group')[0].scrollHeight <= 700) {
            document.getElementsByClassName("back-to-top-btn")[0].style.display = "none";
        }
    }

    renderAilmentsDesktop() {
        const { symptoms } = this.props.conditions;

        return symptoms.map((symptom) => {
            return <AilmentDesktop _id={symptom._id} key={symptom._id} name={symptom.name} />
        });
    }

    scrollToTop() {
        document.getElementsByClassName('container')[0].scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        const { history } = this.props;
        const style = {
            top: '10%',
            textAlign: 'center',
            position: 'fixed',
            color: 'white'
        }

        const { symptoms, symptom_group } = this.props.conditions;
        const { categoryId } = this.props.match.params;

        const ailments = () => {
            if (this.props.conditions.Errors) {
                return <h2 style={style}>
                    We apologize for the inconvenience.
                    <br />
                    The information you are looking for is currently unavailable.
                    <br />
                    Please return to home page.
                </h2>
            }
            if (!symptoms) {
                return <ReactLoading type="bubbles" />
            } else {
                return symptoms.map((item) => {
                    return <AilmentContainer key={item._id} _id={item._id} name={item.name} categoryId={categoryId} />
                });
            }
        }
        return (
            <div className="condition-container">
                <Header push={history.push} logo={saigeLogo} />
                <div className="symptom-group">
                    <h1 className="symptom-name">{symptom_group}</h1>
                    {ailments()}
                    <div className="back-to-top-btn" onClick={() => { this.scrollToTop() }}><img src={upArrow} alt="" /></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        conditions: state.conditions.conditionList,
        conditionID: state.conditionID.conditionsID
    }
}

export default connect(mapStateToProps, {
    getConditionsList: getConditionsList,
})(ConditionsContainer);