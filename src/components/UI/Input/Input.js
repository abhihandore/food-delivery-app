import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef( (props, ref) => {
    return (
        <div className={classes.field} >
            <label className={classes.label} htmlFor={props.input.id}>{props.label}</label>
            <div className='control'>
                <input
                    ref={ref}
                    {...props.input}
                />
            </div>
        </div>
    )
})
export default Input;