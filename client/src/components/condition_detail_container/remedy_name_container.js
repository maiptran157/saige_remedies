import React from 'react';
import './condition_detail_container.css';
import { Link } from 'react-router-dom';

const textStyle = {
    textDecoration: 'none'
}

export default props => {
    return (
        <div className="remedy-name-container">
            <Link style={textStyle} to={`/remedy/${props._id}`} className="remedy-name">{props.name}</Link>
        </div>
    )
}
