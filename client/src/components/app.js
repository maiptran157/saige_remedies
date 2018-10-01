import React from 'react';
import Header from './header';
import ConditionContainer from './condition_container';
import ConditionDetailContainer from './condition_detail_container';
import './app.css';

const App = () => (
    <div className="container">
        <Header />
        {/* <ConditionContainer/> */}
        <ConditionDetailContainer />
    </div>
);

export default App;
