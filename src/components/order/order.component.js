import React from "react";

import classes from "./order.component.scss";

const Order = (props) => {
    const ingredients = [];

    for (let ingredient in props.ingredients) {
        ingredients.push({
            name: ingredient,
            amount: props.ingredients[ingredient]
        });
    }

    const ingredientContent = ingredients.map(item => {
        return <span key={item.name}>{item.name} ({item.amount})</span>;
    });

    return (
        <div className={classes.order}>
            <p>Ingredients: {ingredientContent}</p>
            <p>Price: <strong>£{props.price.toFixed(2)}</strong></p>
        </div>
    );
}

export default Order;