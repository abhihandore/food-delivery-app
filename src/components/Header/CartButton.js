import React from 'react';
import CartIcon from './CartIcon';
import Button from '../UI/Button/Button';
import classes from './CartButton.module.css';
const CartButton = (props) => {
    return (
        <Button 
            className={classes.button}
            >
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span> 
            <span className={classes.badge}>0</span>
        </Button>
    )
}
export default CartButton;