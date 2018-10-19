import React from 'react';
import loadingPage from '../../assets/images/saige_splash.jpg';
import './loading_page.css';

const loading = {
    backgroundImage: `url(${loadingPage})`,
    backgroundSize: `cover`,
}

export default () => {
    return ( 
        <div>
            <img src={loadingPage}/>
        </div>
    )
}