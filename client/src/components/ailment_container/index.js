import React from 'react';
import './ailment_container.css';
import { Link } from 'react-router-dom';
import woodenBackground from '../../assets/images/wood_bg.jpg';

const textStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    textShadow: '2px 2px #000000',
}

const background = {
    backgroundImage: `url(${woodenBackground})`,
    backgroundSize: 'cover',
    boxShadow: '0 10px 10px #000'
}

export default props => {
    const { _id, name, categoryId } = props;
    return (
        <div style={background} className="ailment">
            <Link style={textStyle} to={`/conditions/${categoryId}/${_id}`} className="condition-name">{name}</Link>
        </div>
    )
}