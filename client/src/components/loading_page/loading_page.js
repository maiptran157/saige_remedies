import React from 'react';
import loadingPage from '../../assets/images/saige_splash.jpg';
import './loading_page.css';

export default () => {
    return ( 
        <div>
            <img className="loading-page" src={loadingPage}/>
        </div>
    )
}