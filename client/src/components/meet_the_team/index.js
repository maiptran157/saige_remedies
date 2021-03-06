import React from 'react';
import './meet_the_team.scss';
import Header from '../header';
import saigeLogo from '../../assets/images/saige_logo_no_stem_100px.png';
import github from '../../assets/images/github_icon.svg';
import linkedin from '../../assets/images/linkedin_icon.svg';
import portfolio from '../../assets/images/portfolio.png';
import saigeTeam from './saige_team';

export default props => {
    localStorage.setItem('redirectUrl', '/meet-the-team')
    const displayMembers = () => {
        if (!saigeTeam) {
            return <div className="meet-the-team">Loading...</div>
        } else {
            return saigeTeam.map((team, index) => {
                return (

                    <div className="a-team-member" key={index}>
                        <img src={team.img} alt="" />
                        <h3>{team.role}</h3>
                        <div className="media">
                            <a href={team.github} target="_blank">
                                <img src={github} />
                            </a>
                            <a href={team.linkedin} target="_blank">
                                <img src={linkedin} />
                            </a>
                            <a href={team.porfolio} target="_blank">
                                <img src={portfolio} />
                            </a>
                        </div>
                        <br /><br /><br />
                    </div>

                )
            })
        }
    }
    return (
        <div className="meet-the-team-container">
            <Header match={props.match.path} logo={saigeLogo} />
            <div className="meet-the-team">
                <h1>Meet The Team</h1>
                <div className="members" >
                    {displayMembers()}
                </div>
            </div>
        </div>
    )
}
