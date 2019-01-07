import './not_found_page.css';
import React, { Fragment } from 'react';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

export default props => {
    return (
        <Fragment>
            <Header logo={backButton} buttonType="back-button" />
            <h1 className="not-found-section">
                The result you were looking for does not exist.
                Please return to home page. </h1>
        </Fragment>
    )
}