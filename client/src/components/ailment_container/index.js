import React from 'react';
import './ailment_container.css';
import { Link } from 'react-router-dom';
import woodenBackground from '../../assets/images/button.png'

const textStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    textShadow: '2px 2px #000000',
}

const background = {
    backgroundImage: `url(${woodenBackground})`,
}

export default props => {
    const { _id, name, categoryId } = props;
    return (
        <Link to={`/conditions/${categoryId}/${_id}`} style={background} className="ailment">
            <div style={textStyle} className="ailment-name">{name}</div>
        </Link>
    )
}