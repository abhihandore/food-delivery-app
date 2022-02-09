import React, { useContext, useEffect, useState } from 'react';
import CartIcon from './CartIcon';
import {CartContext} from '../../Store/cart_context';
import Button from '../UI/Button/Button';
import classes from './CartButton.module.css';
const CartButton = (props) => {
    const cartCTX = useContext(CartContext);
    const [isBtnHighlighted, setBtnHighlighted] = useState(false);
    
    const {itemsInCart: items}  = cartCTX; // items is an alias
    const numberOfCartItems = cartCTX.itemsInCart.reduce( (currNum, item) => {
        return currNum + item.amount;
    }, 0);
    const cartBtnClasses = `${classes.button}  ${isBtnHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnHighlighted(true);
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    },[items]);
    return (
        <React.Fragment>
            <Button 
                className={cartBtnClasses}
                onClick={props.onClick}
            >
                <span className={classes.icon}><CartIcon /></span>
                <span>Your Cart</span> 
                <span className={classes.badge}>{numberOfCartItems}</span>
            </Button>
        </React.Fragment>
    )
}
export default CartButton;