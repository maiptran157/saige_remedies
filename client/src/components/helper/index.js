import React from 'react';

export const renderInput = props => {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" type={ props.type || "text"}/>
            <p>{props.meta.error && props.touched}</p>
        </div>    
    )
}