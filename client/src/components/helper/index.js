import React from 'react';
import './helper.css';

export const renderInput = props => {
    return (
        <div className="input-container">
        <div className="label">
            <label>{props.label}</label>
        </div>
            <input {...props.input} autoComplete="off" type={ props.type || "text"}/>
            <p>{props.meta.error && props.touched}</p>
        </div>    
    )
}