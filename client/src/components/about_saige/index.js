import React, { Component } from 'react';
import './about_saige.scss';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import saigeIcon from '../../assets/images/saige_logo_no_stem_100px.png';
import cssIcon from '../../assets/images/css.png';
import es6Icon from '../../assets/images/es6.png';
import htmlIcon from '../../assets/images/html.png';
import javascriptIcon from '../../assets/images/javascript.png';
import mySqlIcon from '../../assets/images/mySql.png';
import phpIcon from '../../assets/images/php.png';
import reactIcon from '../../assets/images/react.png';
import reduxIcon from '../../assets/images/redux.png';
import SassIcon from '../../assets/images/Sass.png';



class AboutSaige extends Component {
    render() {
        const { match } = this.props
        return (
            <div className="about-saige-container">
            <Header match={match.path} logo={saigeLogo} />
            <div className="about-saige">
                <h1>About Saige</h1>
                <p>Saige Remedies was created based on the idea that natural remedies passed down from mothers to the next generation can be as effective as your visit to the doctor, and staying healthy can start with natural ingredients found locally.</p>
                <h2>Technologies used:</h2>
                <div className="tech-used">
                    <div className="front-end-tech">
                        <h3>Front End</h3>
                        <img src={htmlIcon} />
                        <img src={cssIcon} />
                        <img src={SassIcon} />
                        <img src={javascriptIcon} />
                        <img src={reactIcon} />
                        <img src={reduxIcon} />
                    </div>
                    <div className="back-end-tech">
                        <h3>Back End</h3>
                        <img src={phpIcon} />
                        <img src={mySqlIcon} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default AboutSaige;