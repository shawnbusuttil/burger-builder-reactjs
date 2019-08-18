import React from "react";

import BuildControl from "./build-control/build-control.component";
import Button from "../../button/button.component";

import classes from "./build-controls.component.scss";

const controls = [
	{ label: "meat", type: "meat" }, 
	{ label: "salad", type: "salad" },
	{ label: "bacon", type: "bacon" },
	{ label: "cheese", type: "cheese" }
];

const BuildControls = (props) => (
	<div className={classes.controls}>
		<p>Current Price: {props.price.toFixed(2)}</p>
		{controls.map(ctrl => <BuildControl key={ctrl.label}
			label={ctrl.label}
			add={() => props.addIngredient(ctrl.type)}
			remove={() => props.removeIngredient(ctrl.type)}/>
		)}
		<Button type="success" disabled={!props.canPurchase} clicked={props.isOrdering}>Order Now</Button>
	</div>
);

export default BuildControls;