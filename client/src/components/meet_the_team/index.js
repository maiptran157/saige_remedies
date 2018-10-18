import React from 'react';
import './meet_the_team.scss';
import Header from '../header';
import backButton from '../../assets/images/back_arrow_white_shadow.png';
import github from '../../assets/images/github_icon.svg';
import linkedin from '../../assets/images/linkedin_icon.svg';
import portfolio from '../../assets/images/desktop.svg';
import saigeTeam from './saige_team';

export default props => {
    console.log(saigeTeam);
    const displayMembers = () => {
        if (!saigeTeam) {
            return <div className="meet-the-team">Loading...</div>
        } else {
            return saigeTeam.map((team, index) => {
                return (

                    <div className="a-team-member" key={index}>
                        <img src={team.img} alt="" />
                        <h3>{team.name} ( {team.role} )</h3>
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
                    </div>

                )
            })
        }
    }

    return (
        <div>
            <Header logo={backButton} buttonType="back-button" />
            <div className="meet-the-team">
                <h1>Meet The Team</h1>
                <div className="members" >
                    {displayMembers()}
                </div>
            </div>
        </div>
    )
}
