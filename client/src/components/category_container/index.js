import React from 'react';
import './category_container.css';
import { Link } from 'react-router-dom';

export default props => {
    console.log('Condition Name:', props.name);
    console.log('Condition Category:', props.category);
    return (
        <Link to={`/conditions/${props.category}`} className="category-name">
            <div>{props.category}</div>
        </Link>
    )
}