import React from 'react';
import './helper.css';

export const renderInput = ({ input, label, type, meta: { error, touched } }) => {
    return (
        <div className="input-container">
            {/* <div className="label">
                <label>{label}</label>
            </div> */}
            <input className="input-field" {...input} placeholder={label} autoComplete="off" type={type || "text"} />
            <p className="auth-error-text" {...input}> {touched && error} </p>
        </div>
    )
}