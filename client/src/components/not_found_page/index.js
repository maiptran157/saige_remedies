import './not_found_page.css';
import React, { Component, Fragment } from 'react';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';

export default class NotFoundPage extends Component {
    render() {
        const { match } = this.props;
        return (
            <Fragment>
                <Header match={match.path} logo={backButton} buttonType="back-button" />
                <h1 className="not-found-section">
                    The result you were looking for does not exist.
                Please return to home page. </h1>
            </Fragment>
        )
    }
}