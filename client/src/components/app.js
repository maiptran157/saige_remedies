import React, { Component } from 'react';
import SignUp from './user_signup/';
import SignIn from './user_signin';
import ConditionContainer from './condition_container';
import ConditionDetailContainer from './condition_detail_container';
import RemedyDetailContainer from './remedy_detail_container';
import UmbrellaConditions from './umbrella_conditions';
import SymptomCheck from './symptom_check';
import './app.css';
import AboutSaige from './about_saige';
import MeetTheTeam from './meet_the_team';
import NotFoundPage from './not_found_page';
import { Route, Switch } from 'react-router-dom';
import AgreementModal from '../components/modal/index';
import backgroundImg from '../assets/images/background_image.jpg';
// import LoadingPage from './loading_page/loading_page';

const background = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: `cover`,
}

class App extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                loading: false,
            });
        }, 3000);
    }

    render() {
        // if (this.state.loading) {
        //     return <LoadingPage/>
        // }
        return (
            <div className="container" style={background}>
                <AgreementModal/>
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
