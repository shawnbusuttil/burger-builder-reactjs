import React, { Fragment } from "react";
import classes from "./layout.component.scss";

const Layout = (props) => (
	<Fragment>
		<div>Toolbar, Sidedrawer, Backdrop</div>
		<main className={classes.content}>{props.children}</main>
	</Fragment>
);

export default Layout;