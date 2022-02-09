import React,{ Fragment } from 'react';
import classes from './CartItem.module.css';
import Button from '../UI/Button/Button';
const CartItem = (props) => {

    
    return (
        <Fragment>
            <li className={classes['cart-item']} >
                <div className='left-section'>
                    <h2>{props.item.name}</h2>
                    <div className={classes.summary}>
                        <p className={classes.price}>${props.item.price.toFixed(2)}</p>
                        <p className={classes.amount}>{`x ${props.item.amount}`}</p>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button onClick={props.onRemove}>-</Button>
                    <Button onClick={props.onAdd}>+</Button>
                </div>
            </li> 
        </Fragment>
        
    )
}

export default CartItem;