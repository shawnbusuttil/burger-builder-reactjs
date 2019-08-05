import React from "react";

import classes from "./navigation-items.component.scss";

const NavigationItems = (props) => (
	<ul className={classes.navigationItems}>
		{props.navItems.map(item => <li key={item.title}>
			<a href={item.link} className={item === props.navItems[0] ? classes.active : null}>
				{item.title}
			</a>
		</li>)}
	</ul>
);

export default NavigationItems;