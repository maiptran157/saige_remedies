import React from 'react';
import ConditionContainer from './condition_container';
import ConditionDetailContainer from './condition_detail_container';
import RemedyDetailContainer from './remedy_detail_container';
import UmbrellaConditions from './umbrella_conditions';
import { Route } from 'react-router-dom';
import './app.css';
import backgroundImg from '../images/background_image_v1.jpg'

const style = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: `cover`
}

const App = () => (
    <div className="container" style={style}>

        <UmbrellaConditions path="/" exact component={UmbrellaConditions}/>
        <Route path="/conditions" component={ConditionContainer} /> 
        <Route path="/condition/:conditionId" component={ConditionDetailContainer} />
        <Route path="/remedy/:remedyId" component={RemedyDetailContainer} />

    </div>
);

export default App;
