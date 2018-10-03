import React from 'react';
import './condition_detail_container.css';

export default props => {
    // console.log(props);
    const { remedyName } = props;
    return (
        <div className="remedy-name-container">
            <span className="remedy-name">{remedyName}</span>
        </div>
    )
}
