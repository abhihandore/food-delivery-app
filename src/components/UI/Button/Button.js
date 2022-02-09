import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <button 
            className={`${props.className}`} 
            id={props.id}
            type={props.type} 
            onClick={props.onClick} 
            name={props.name}
            >
            {props.children}
        </button>
    )
}

export default Button;