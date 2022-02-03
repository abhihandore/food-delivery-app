import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.field} >
            <label className={classes.label} htmlFor={props.id}>{props.label}</label>
            <div className='control'>
                <input
                    type={props.type} 
                    id={props.id} 
                    name={props.name} 
                    className={`${props.className} input`} 
                    value={props.value} 
                    placeholder={props.placeholder} 
                />
            </div>
        </div>
    )
}
export default Input;