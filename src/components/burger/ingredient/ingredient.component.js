import React, { Component } from "react";
import { string } from "prop-types";

import classes from "./ingredient.component.scss";

class Ingredient extends Component {
	render() {
		let ingredient = null;
		
		if (this.props.type === "breadTop") {
			ingredient = (
				<div className={classes.breadTop}>
					<div className={classes.seeds}></div>
					<div className={classes.seedsAlt}></div>
				</div>
			);
		} else {
			ingredient = <div className={`${classes[this.props.type]}`}></div>;
		}
		
		return ingredient;
	}
}

Ingredient.propTypes = {
	type: string.isRequired
}

export default Ingredient;