import React from "react";

import classes from "./toolbar.component.scss";

import Logo from "./../../logo/logo.component";
import NavigationItems from "./../navigation-items/navigation-items.component";

const navItems = [
	{
		link: "/",
		title: "Burger Builder"
	},
	{
		link: "/",
		title: "Checkout"
	}
];

const Toolbar = (props) => (
	<header className={classes.toolbar}>
		<div className={classes.menu} onClick={props.toggleMenu}>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div className={classes.logo}>
			<Logo />
		</div>
		<nav>
			<NavigationItems navItems={navItems} />
		</nav>
	</header>
);

export default Toolbar;