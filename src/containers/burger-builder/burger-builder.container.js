import React, { Component, Fragment } from "react";

import Burger from "../../components/burger/burger.component";
import BuildControls from "../../components/burger/build-controls/build-controls.component";

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			meat: 1,
			salad: 1,
			bacon: 1,
			cheese: 2
		}
	}

	render() {
		return (
			<Fragment>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls />
			</Fragment>
		);
	}
}

export default BurgerBuilder;