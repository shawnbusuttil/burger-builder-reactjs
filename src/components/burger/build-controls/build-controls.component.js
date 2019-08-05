import React from "react";

import BuildControl from "./build-control/build-control.component";
import classes from "./build-controls.component.scss";

const controls = [
	{ label: "meat", type: "meat" }, 
	{ label: "salad", type: "salad" },
	{ label: "bacon", type: "bacon" },
	{ label: "cheese", type: "cheese" }
];

const BuildControls = (props) => (
	<div className={classes.buildControls}>
		<p>Current Price: {props.price.toFixed(2)}</p>
		{controls.map(ctrl => <BuildControl key={ctrl.label}
			label={ctrl.label}
			add={() => props.addIngredient(ctrl.type)}
			remove={() => props.removeIngredient(ctrl.type)}/>
		)}
		<button className={classes.order} disabled={!props.canPurchase} onClick={props.isOrdering}>Order Now</button>
	</div>
);

export default BuildControls;