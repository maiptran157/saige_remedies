import React, { Component } from 'react';
import SignUp from './user_signup/';
import SignIn from './user_signin';
import ConditionContainer from './condition_container';
import ConditionDetailContainer from './condition_detail_container';
import RemedyDetailContainer from './remedy_detail_container';
import UmbrellaConditions from './umbrella_conditions';
import { Route } from 'react-router-dom';
import './app.css';

import backgroundImg from '../assets/images/background_image.jpeg';
// import Modal from '../components/modal/index';

const style = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: `cover`,
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };
    }
    componentDidMount() {
        this.openModal();
    }

    openModal() {
        this.setState({
            isModalOpen: true,
        });
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    }

    render() {
        return (

            <div className="container" style={style}>
                {/* <Modal isOpen={this.state.isModalOpen} >
                <h1>DANGER</h1>
                <button onClick={this.closeModal}>Close Modal</button>
            </Modal> */}
                <Route path="/" exact component={UmbrellaConditions} />
                <Route path="/conditions/:categoryId" exact component={ConditionContainer} />
                <Route path="/conditions/:category/:conditionId" component={ConditionDetailContainer} />
                <Route path="/remedy/:remedyId" component={RemedyDetailContainer} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/sign-in" component={SignIn}/> 
            </div>
        )
    }
}

export default App;
