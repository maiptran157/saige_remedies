import './condition_container.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AilmentContainer from '../ailment_container';
import { getConditionsList } from '../../actions/index';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import ReactLoading from 'react-loading';
import MediaQuery from 'react-responsive';
import AilmentDesktop from '../desktop/ailment_desktop';
import { getConditionsID } from '../../actions';


class ConditionsContainer extends Component {
    componentDidMount() {
        const { categoryId } = this.props.match.params;
        this.props.getConditionsList(categoryId);
    }

    renderAilmentsDesktop() {
        const { symptoms } = this.props.conditions;

        return symptoms.map( (symptom) => {
            return <AilmentDesktop _id={symptom._id} key={symptom._id} name={symptom.name}/>
        });
    }

    render() {
        console.log("PROPS:", this.props.conditionID);
        const { history } = this.props;
        const style = {
            top: '10%',
            textAlign: 'center',
            position: 'fixed',
            color: 'white'
        }

        const { symptoms, symptom_group } = this.props.conditions;
        const { categoryId } = this.props.match.params;

        if (!symptoms) {
            return null;
        }

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
            <div className="condition-container" >
                <Header push={history.push} logo={saigeLogo} />
                <div className="symptom-group">
                    <h1 className="symptom-name">{symptom_group}</h1>
                    {ailments()}
                </div>
                <div className="desktop-symptom-group">   
                    <MediaQuery query="(min-width: 1024px)">
                        {this.renderAilmentsDesktop()}
                    </MediaQuery>
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