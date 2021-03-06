import React from "react";

import classes from "./button.component.scss";

const Button = (props) => (
	<button className={[classes.button, classes[props.type]].join(" ")} disabled={props.disabled} onClick={props.clicked}>
		{props.children}
	</button>
);

export default Button;