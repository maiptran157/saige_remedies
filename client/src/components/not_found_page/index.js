import React, { Fragment } from 'react';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

const style = {
    top: '10%',
    textAlign: 'center',
    position: 'fixed',
    color: 'white'
}

export default props => {
    return (
        <Fragment>
            <Header logo={backButton} buttonType="back-button" />
            <h1 style={style}>
                The result you were looking for does not exist.
                Please return to home page. </h1>
        </Fragment>
    )
}