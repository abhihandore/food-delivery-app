import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './MealForm.module.css';

const MealForm = (props) => {
    const formSubmitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <React.Fragment>
            <form className={classes.form} onSubmit={formSubmitHandler} >
                <fieldset className={classes.fieldset}>
                    <Input type='number' className='input-amount' id='amount' placeholder='0' label='Amount' />
                    <div className='action-buttons'>
                        <Button className='button' >Add Item</Button>
                    </div>
                </fieldset>
            </form>
        </React.Fragment>

    )
}
export default MealForm;