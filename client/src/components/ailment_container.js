import React from 'react';
import './ailment_container.css';

export default props => {
    return (
        <div className="ailment">
            <span className="condition-name">{props.name}</span>
        </div>
    )
}