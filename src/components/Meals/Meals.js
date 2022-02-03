import React from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card/Card';
import classes from './Meals.module.css';

const Meals = (props) => {
    return (
        <Card className={classes.meals} >
            <ul>
                {
                    props.meals.map((meal) => {
                        return <MealItem 
                            key={meal.id} 
                            itemName={meal.name} 
                            description={meal.description} 
                            price={meal.price} />
                    })
                }
            </ul>
        </Card>
    );
}
export default Meals;