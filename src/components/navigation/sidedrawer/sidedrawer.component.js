import React, { Fragment } from "react";

import classes from "./sidedrawer.component.scss";

import Logo from "./../../logo/logo.component";
import NavigationItems from "./../navigation-items/navigation-items.component";
import Backdrop from "../../backdrop/backdrop.component";

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

const SideDrawer = (props) => {
	let sideDrawerClasses = [classes.sidedrawer, props.open ? classes.open : classes.closed];
	
	return (
		<Fragment>
			<Backdrop show={props.open} clicked={props.close} />
			<div className={sideDrawerClasses.join(" ")}>
				<div className={classes.logo}> 
					<Logo />
				</div>
				<nav>
					<NavigationItems navItems={navItems} />
				</nav>
			</div>
		</Fragment>
	);
}

export default SideDrawer;