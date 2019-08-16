import React, { Component } from "react";

import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";

class Checkout extends Component {
	state = {
		ingredients: {}
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};

		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}

		this.setState({ ingredients: ingredients });
	}

	cancelCheckout = () => {
		this.props.history.goBack();
	}

	continueCheckout = () => {
		this.props.history.replace("/checkout/contact-data");
	}

	render() {
		return (
			<div>
				<CheckoutSummary ingredients={this.state.ingredients}
					cancelCheckout={this.cancelCheckout} continueCheckout={this.continueCheckout} />
			</div>
		);
	}
}	

export default Checkout;