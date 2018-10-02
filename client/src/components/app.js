import React from 'react';
import ConditionContainer from './condition_container';
import ConditionDetailContainer from './condition_detail_container';
import RemedyDetailContainer from './remedy_detail_container';
import { Route } from 'react-router-dom';
import './app.css';
import backgroundImg from '../images/background_image_v1.jpg'

const style = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: `cover`
}

const App = () => (
    <div className="container" style={style}>
        {/* <Route exact path="/" component={ConditionContainer} /> */}
        <Route path="" component={ConditionDetailContainer} />
        {/* <RemedyDetailContainer /> */}
    </div>
);

export default App;
