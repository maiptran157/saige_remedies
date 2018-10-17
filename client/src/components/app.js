import React, { Component } from 'react';
import SignUp from './user_signup/';
import SignIn from './user_signin';
import ConditionContainer from './condition_container';
import ConditionDetailContainer from './condition_detail_container';
import RemedyDetailContainer from './remedy_detail_container';
import UmbrellaConditions from './umbrella_conditions';
import SymptomCheck from './symptom_check';
import { Route } from 'react-router-dom';
import './app.css';
// import AgreementModal from '../components/modal/index';
import backgroundImg from '../assets/images/background_image.jpeg';


const style = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: `cover`,
}

class App extends Component {

    render() {
        return (
            <div className="container" style={style}>
                {/* <AgreementModal/> */}
                <Route path="/" exact component={UmbrellaConditions} />
                <Route path="/conditions/:categoryId" exact component={ConditionContainer} />
                <Route path="/conditions/:categoryId/:conditionId" component={ConditionDetailContainer} />
                <Route path="/remedy/:remedyId" component={RemedyDetailContainer} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/symptom-check" component={SymptomCheck} />
            </div>
        )
    }
}

export default App;
