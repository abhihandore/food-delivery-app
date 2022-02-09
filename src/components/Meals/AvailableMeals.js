import React from 'react';
import MealItem from './MealItem';
import Card from '../UI/Card/Card';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      amount: 5,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      amount: 5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      amount: 5,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      amount: 5,
    },
];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map((meal) => {
        return <MealItem 
                    id={meal.id}
                    key={meal.id} 
                    itemName={meal.name} 
                    description={meal.description} 
                    price={meal.price} />
    })
    return (
        <Card className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
        </Card>
    )
}

export default AvailableMeals;