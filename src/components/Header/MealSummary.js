import React from 'react';
import Card from '../UI/Card/Card';
import classes from './MealSummary.module.css';

const MealSummary = () => {
    return (
        <Card className={classes.summary}>
            <h2>Delicious Food , Delivered to Home</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Card>
    )
}
export default MealSummary;