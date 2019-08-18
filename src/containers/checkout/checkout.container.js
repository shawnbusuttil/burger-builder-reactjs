import React, { Component } from "react";
import { Route } from "react-router-dom";

import httpConfig from "../../axios.config";

import Contact from "./contact/contact.container";
import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";

class Checkout extends Component {
	state = {
		price: 0,
		isBusy: false,
		ingredients: null,
	};

	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);

		let price = 0;
		const ingredients = {};

		for (let param of query.entries()) {
			if (param[0] === "price") {
				price = param[1];
			} else {
				ingredients[param[0]] = +param[1];
			}
		}

		this.setState({ ingredients, price });
	}

	cancelCheckout = () => {
		this.props.history.goBack();
	}

	continueCheckout = () => {
		this.props.history.replace("/checkout/contact");
	}

	completeCheckout = (customerData) => {
        this.setState({ isBusy: true });

        const order = {
			ingredients: this.state.ingredients,
			price: this.state.price,
			customer: {
				name: customerData.name,
				email: customerData.email,
				address: customerData.address
			}
		};

		httpConfig.post("/orders.json", order)
			.then(response => {
                this.setState({ isBusy: false });
				this.props.history.push("/");
            })
			.catch(error => this.setState({ isBusy: false }));
	}

	render() {
		return (
			<div>
				<CheckoutSummary ingredients={this.state.ingredients}
					cancelCheckout={this.cancelCheckout} continueCheckout={this.continueCheckout} />
				<Route path={this.props.match.path + "/contact"} render={(props) => (<Contact placeOrder={this.completeCheckout} isBusy={props.isBusy} />)} />
			</div>
		);
	}
}	

export default Checkout;