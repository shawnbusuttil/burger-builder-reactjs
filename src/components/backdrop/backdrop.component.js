import React from "react";

import classes from "./backdrop.component.scss";

const Backdrop = (props) => (
	props.show ? <div className={classes.backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;