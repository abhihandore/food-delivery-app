import React, { useContext } from 'react';
import {CartContext} from '../../Store/cart_context';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Button from '../UI/Button/Button';

const Cart = (props) => {

    const cartCTX = useContext(CartContext);

    const cartItemAddHandler =(item) => {
        cartCTX.addItem({...item, amount: 1});
    }

    const cartItemRemoveHandler =(id) => {
        cartCTX.removeItem(id);
    }
    const itemsList = cartCTX.itemsInCart.map((item) => {
        return <CartItem 
        key={Math.random().toString()} 
        id={item.id}
        item={item}
        onAdd={cartItemAddHandler.bind(null, item)} 
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
         />
    });
    const totalAmount = cartCTX.totalAmount.toFixed(2);
    const hasItems = cartCTX.itemsInCart.length > 0;

    return (
        <div className='cart-wrapper'>
            <ul className={classes['cart-items']} >
                {itemsList}
                <li className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </li>
            </ul>
            <div className={classes.actions}>
                <Button className={classes['button--alt']} onClick={props.onClose} >Close</Button>
                {hasItems && <Button className={classes.button} >Order</Button> } 
            </div>
        </div>
    )
}

export default Cart;