import React from 'react';
import MealSummary from './MealSummary';
import banner from '../../assets/meals.jpg';
import CartButton from './CartButton';
import classes from './Header.module.css';
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h2>React-Meal</h2>
                <CartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={banner} />
            </div>
            <MealSummary />
        </React.Fragment>
    )
}
export default Header;