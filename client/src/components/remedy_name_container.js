import React from 'react';
import './condition_detail_container.css';
import { Link } from 'react-router-dom';

export default props => {
    console.log(props.name);
    return (
        <div className="remedy-name-container">
            <Link to={`/remedy/${props._id}`} className="remedy-name">{props.name}</Link>
        </div>
    )
}
