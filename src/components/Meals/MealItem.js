import React, {useContext} from 'react';
import {CartContext} from '../../Store/cart_context';
import MealForm from './MealForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {

    const ctx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
    const onAddItemHandler = (amount) => {
        ctx.addItem({
            id: props.id,
            name: props.itemName,
            description: props.description,
            price: props.price,
            amount
        })
    }
    return (
        <React.Fragment>
        <li className={classes.meal}>
            <div className='details'>
                <h3>{props.itemName}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>${price}</p>
            </div>
            <MealForm id={props.id} onAddItemSubmit={onAddItemHandler} />
        </li>
        </React.Fragment>
    )
}

export default MealItem;