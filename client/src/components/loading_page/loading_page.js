import React from 'react';
import loadingPage from '../../assets/images/loading_page.png';
import './loading_page.css';

const loading = {
    backgroundImage: `url(${loadingPage})`,
    backgroundSize: `cover`,
}

export default props => {
    return ( 
        <div style={loading}>
            <img src={loadingPage} alt=""/>
        </div>
    )
}