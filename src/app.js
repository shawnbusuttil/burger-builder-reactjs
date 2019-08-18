import React, { Component } from "react";
import { Route } from "react-router-dom";

import Layout from "./components/layout/layout.component";
import BurgerBuilder from "./containers/burger-builder/burger-builder.container";
import Checkout from "./containers/checkout/checkout.container";
import Orders from "./containers/orders/order.container";

export class App extends Component {
	render() {
		return (
			<Layout>
				<Route path="/" exact component={BurgerBuilder} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/orders" component={Orders} />
			</Layout>
		);
	}
}

export default App;