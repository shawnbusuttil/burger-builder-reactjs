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
		{controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} />)}
	</div>
);

export default BuildControls;