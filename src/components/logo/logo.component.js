import React from "react";

import classes from "./logo.component.scss";
import burgerLogo from "../../assets/images/burger-logo.png";

const Logo = (props) => (
	<div className={classes.logo}>
		<img src={burgerLogo} alt="MyBurger" />
	</div>
);

export default Logo;