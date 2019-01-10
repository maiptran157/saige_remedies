import React from 'react';
import './category_container.scss';
import { Link } from 'react-router-dom';


export default props => {
    return (
        <div className="category-box">
            <Link to={`/conditions/${props.id}`} className="category-img">
                <img src={props.img} alt="category image" />
            </Link>
            <div className="category-name">{props.name}</div>
        </div>
    )
}
