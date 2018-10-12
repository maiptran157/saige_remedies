import React from 'react';
import './category_container.scss';
import { Link } from 'react-router-dom';


export default props => {
    console.log(props);
    return (
        <div className="category-box">
            <Link to={`/conditions/${props.name}`} className="category-img">
                <img src={props.img} alt="" />
            </Link>
            <div className="category-name">{props.name}</div>
        </div>
    )
}