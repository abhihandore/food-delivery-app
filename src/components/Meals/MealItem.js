import React from 'react';
import MealForm from './MealForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    return (
        <React.Fragment>
        <li className={classes.meal}>
            <div className='details'>
                <h3>{props.itemName}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>${props.price}</p>
            </div>
            <MealForm />
        </li>
        </React.Fragment>
    )
}

export default MealItem;