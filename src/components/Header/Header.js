import React, { Fragment } from 'react';
import banner from '../../assets/meals.jpg';
import CartButton from './CartButton';
import classes from './Header.module.css';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2>React-Meal</h2>
                <CartButton onClick={props.onCartShow} />
            </header>
            <div className={classes['main-image']}>
                <img src={banner} alt="Banner" />
            </div>
            
        </Fragment>
    )
}
export default Header;