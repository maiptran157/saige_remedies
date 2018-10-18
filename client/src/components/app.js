import React, { Component } from 'react';
import SignUp from './user_signup/';
import SignIn from './user_signin';
import ConditionContainer from './condition_container';
import ConditionDetailContainer from './condition_detail_container';
import RemedyDetailContainer from './remedy_detail_container';
import UmbrellaConditions from './umbrella_conditions';
import SymptomCheck from './symptom_check';
import AboutSaige from './about_saige';
import MeetTheTeam from './meet_the_team';
import NotFoundPage from './not_found_page';
import { Route, Switch } from 'react-router-dom';
import './app.css';
// import AgreementModal from '../components/modal/index';
import backgroundImg from '../assets/images/background_image.jpg';

const style = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: `cover`,
}

class App extends Component {

    render() {
        return (
            <div className="container" style={style}>
                {/* <AgreementModal/> */}
                <Switch>
                    <Route path="/" exact component={UmbrellaConditions} />
                    <Route path="/conditions/:categoryId" exact component={ConditionContainer} />
                    <Route path="/conditions/:categoryId/:conditionId" component={ConditionDetailContainer}/>
                    <Route path="/remedy/:remedyId" component={RemedyDetailContainer} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/symptom-check" component={SymptomCheck} />
                    <Route path="/about-saige" component={AboutSaige} />
                    <Route path="/meet-the-team" component={MeetTheTeam} />
                    <Route component={NotFoundPage} />
                </Switch>

            </div>
        )
    }
}

export default App;
