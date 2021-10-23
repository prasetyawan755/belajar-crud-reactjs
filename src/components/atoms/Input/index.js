import React from 'react';
import './input.scss';

const Input = ({label, ...rest}) => {
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            <input className="form-input" {...rest}/>
        </div>
    )
}

export default Input
