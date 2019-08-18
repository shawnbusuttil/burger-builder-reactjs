import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import httpConfig from "../../axios.config";

import Contact from "./contact/contact.container";
import CheckoutSummary from "../../components/order/checkout-summary/checkout-summary.component";

class Checkout extends Component {
	state = {
		isBusy: false
	};

	cancelCheckout = () => {
		this.props.history.goBack();
	}

	continueCheckout = () => {
		this.props.history.replace("/checkout/contact");
	}

	completeCheckout = (customerData) => {
        this.setState({ isBusy: true });

        const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
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
				<CheckoutSummary ingredients={this.props.ingredients}
					continueCheckout={this.continueCheckout}
					cancelCheckout={this.cancelCheckout} />
				<Route path={this.props.match.path + "/contact"} render={(props) => (<Contact placeOrder={this.completeCheckout} isBusy={props.isBusy} />)} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients,
		price: state.totalPrice
	};
}

export default connect(mapStateToProps)(Checkout);