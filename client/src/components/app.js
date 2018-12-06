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
import MediaQuery from "react-responsive";
import upArrow from '../assets/images/double-up-arrow.svg'
// import LoadingPage from './loading_page/loading_page';

const background = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: `cover`,
}

class App extends Component {
    constructor(props) {
        super(props);
        this.displayScrollBtn = this.displayScrollBtn.bind(this);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.displayScrollBtn);
        document.getElementsByClassName("back-to-top-btn")[0].style.display = "none";
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 3000);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.displayScrollBtn);
    }

    displayScrollBtn() {
        console.log("displayScrollBtn is called")
        if (document.getElementsByClassName('symptom-group')[0] && document.getElementsByClassName('symptom-group')[0].scrollHeight >= 700) {
            document.getElementsByClassName("back-to-top-btn")[0].style.display = "block";
        } else {
            document.getElementsByClassName("back-to-top-btn")[0].style.display = "none";
        }
    }

    scrollToTop() {
        console.log("Up arrow btn was clicked!")
        // document.getElementsByClassName('symptom-group')[0].scrollTo(0, 0)
        window.scrollTo(0, 0)
    }

    render() {
        // if (this.state.loading) {
        //     return <LoadingPage/>
        // }
        return (
            <div className="container" style={background} onScroll={this.displayScrollBtn}>
                {/* <AgreementModal/> */}
                <Switch>
                    <Route path="/" exact component={UmbrellaConditions} />
                    <Route path="/conditions/:categoryId" exact component={ConditionContainer} />
                    <Route path="/conditions/:categoryId/:conditionId" component={ConditionDetailContainer} />
                    <Route path="/remedy/:remedyId" component={RemedyDetailContainer} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/symptom-check" component={SymptomCheck} />
                    <Route path="/about-saige" component={AboutSaige} />
                    <Route path="/meet-the-team" component={MeetTheTeam} />
                    <Route component={NotFoundPage} />
                </Switch>
                <img className="back-to-top-btn" onClick={() => { this.scrollToTop() }} src={upArrow} alt="" />
            </div>
        )
    }
}

export default App;
