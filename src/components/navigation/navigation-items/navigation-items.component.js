import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./navigation-items.component.scss";

const NavigationItems = (props) => (
	<ul className={classes.navigationItems}>
		{
			props.navItems.map(item => <li key={item.title}>
				<NavLink exact to={item.link} activeClassName={classes.active}>
					{item.title}
				</NavLink>
			</li>)
		}
	</ul>
);

export default NavigationItems;