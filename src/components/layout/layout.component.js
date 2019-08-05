import React, { Component, Fragment } from "react";

import classes from "./layout.component.scss";

import Toolbar from "../navigation/toolbar/toolbar.component";
import SideDrawer from "../navigation/sidedrawer/sidedrawer.component";

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	toggleMenu = () => {
		this.setState((prevState) => { return { showSideDrawer: !prevState.showSideDrawer }});
	}

	closeMenu = () => {
		this.setState({ showSideDrawer: false });
	}

	render() {
		return (
			<Fragment>
				<Toolbar toggleMenu={this.toggleMenu} />
				<SideDrawer open={this.state.showSideDrawer} close={this.closeMenu} />
				<main className={classes.content}>{this.props.children}</main>
			</Fragment>
		);
	}
}

export default Layout;