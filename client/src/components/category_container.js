import React from 'react';
import './category_container.css';

export default props => {
    console.log(props.conditionName);
    return (
        <div className="category-name">{props.conditionName}</div>
    )
}