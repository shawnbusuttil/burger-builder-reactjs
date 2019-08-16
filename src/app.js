import React, { Component } from "react";
import { Route } from "react-router-dom";

import Layout from "./components/layout/layout.component";
import BurgerBuilder from "./containers/burger-builder/burger-builder.container";
import Checkout from "./containers/checkout/checkout.container";

export class App extends Component {
	render() {
		return (
			<Layout>
				<Route path="/" exact component={BurgerBuilder} />
				<Route path="/checkout" component={Checkout} />
			</Layout>
		);
	}
}

export default App;