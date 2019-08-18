import React, { Fragment } from "react";

import classes from "./order-summary.component.scss";

import Button from "../../button/button.component";

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map(key => {
		return <li key={key}>
			<span className={classes.ingredient}>{key}</span>: {props.ingredients[key]}
		</li>
	});

	return (
		<Fragment>
			<h3>Your Order</h3>

			<ul>{ingredientSummary}</ul>
			<p><strong>Total: </strong>£{props.price.toFixed(2)}</p>

			<p>Continue to Checkout?</p>
			<Button type="warn" clicked={props.cancelPurchase}>Cancel</Button>
			<Button type="success" clicked={props.continuePurchase}>Continue</Button>
		</Fragment>
	);
}

export default OrderSummary;