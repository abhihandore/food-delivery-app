import React, { useRef, useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './MealForm.module.css';

const MealForm = (props) => {

    const [isFormValid, setIsFormValid] = useState(true);
    const inputRef = useRef();
    
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const itemAmount = inputRef.current.value; 
        const itemAmountNumber = +itemAmount;
        if(itemAmount.trim().length === 0 
            || itemAmountNumber < 1 
            || itemAmountNumber > 5){
                setIsFormValid(false);
                return; 
            }
        props.onAddItemSubmit(itemAmountNumber); 
        setIsFormValid(true);
    }
    return (
        <React.Fragment>
            <form className={classes.form} onSubmit={formSubmitHandler} >
                <fieldset className={classes.fieldset}>
                    <Input 
                        ref={inputRef} 
                        label='Amount' 
                        input={{
                            type : 'number',
                            id : `amount_${props.id}`,
                            min : '1',
                            max : '5',
                            step : '1',
                            defaultValue : '1',
                        }}
                    />
                    <div className='action-buttons'>
                        <Button className='button' >Add Item</Button>
                    </div>
                    { !isFormValid && <p style={{color: 'red', textAlign: 'center',marginTop: '10px'}}>Invalid amount</p> }
                </fieldset>
            </form>
        </React.Fragment>

    )
}
export default MealForm;