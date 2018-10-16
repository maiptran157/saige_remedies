import React from 'react';
import './ailment_container.css';
import { Link } from 'react-router-dom';

const textStyle = {
    textDecoration: 'none'
}

export default props => {
    console.log("ailemnt props:", props)
    const { _id, name, categoryId } = props;
    return (
        <div className="ailment">
            <Link style={textStyle} to={`/conditions/${categoryId}/${_id}`} className="condition-name">{name}</Link>
        </div>
    )
}