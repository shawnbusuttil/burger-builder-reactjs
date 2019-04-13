import React from "react";

import classes from "./build-control.component.scss";

const BuildControl = (props) => (
	<div className={classes.buildControl}>
		<div className={classes.label}>{props.label}</div>
		<button className={classes.less}>-</button>
		<button className={classes.more}>+</button>
	</div>
);

export default BuildControl;