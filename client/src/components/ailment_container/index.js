import React from 'react';
import './ailment_container.css';
import { Link } from 'react-router-dom';

export default props => {
    // console.log('Ailment Props:', props);
    const { _id, name, category } = props;
    return (
        <div className="ailment">
            <Link to={`/conditions/${category}/${_id}`} className="condition-name">{name}</Link>
        </div>
    )
}