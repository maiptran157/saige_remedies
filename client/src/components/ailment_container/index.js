import React from 'react';
import './ailment_container.css';
import { Link } from 'react-router-dom';

const textStyle = {
    textDecoration: 'none'
}

export default props => {
    // console.log('Ailment Props:', props);
    const { _id, name, category } = props;
    return (
        <div className="ailment">
            <Link style={textStyle} to={`/conditions/${category}/${_id}`} className="condition-name">{name}</Link>
        </div>
    )
}