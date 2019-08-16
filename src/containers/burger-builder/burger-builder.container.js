import React, { Component, Fragment } from "react";

import withErrorHandler from "../error-handler/error-handler.component"

import Burger from "../../components/burger/burger.component";
import BuildControls from "../../components/burger/build-controls/build-controls.component";
import OrderSummary from "../../components/burger/order-summary/order-summary.component";
import Modal from "../../components/modal/modal.component";
import Spinner from "../../components/spinner/spinner.component";

import httpConfig from "../../axios.config";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.5,
	bacon: 0.8
};

class BurgerBuilder extends Component {
	state = {
		isBusy: false,
		totalPrice: 0,
		isOrdering: false,
		ingredients: null,
		canPurchase: false
	}

	componentDidMount() {
		console.log(this.props);
		this.setState({ isBusy: true });
		httpConfig.get("/ingredients.json")
			.then(response => this.setState({ ingredients: response.data, isBusy: false }))
			.catch(error => this.setState({ isBusy: false }));
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(key => ingredients[key])
			.reduce((sum, item) => sum + item, 0);

		this.setState({ canPurchase: sum > 0 });
	}

	addIngredient = (type) => {
		const updatedIngredients = {
			...this.state.ingredients,
			[type]: this.state.ingredients[type] + 1
		}

		const price = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({ totalPrice: price, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredient = (type) => {
		if (this.state.ingredients[type] <= 0) {
			return;
		}

		const updatedIngredients = {
			...this.state.ingredients,
			[type]: this.state.ingredients[type] - 1
		}

		const price = this.state.totalPrice - INGREDIENT_PRICES[type];

		this.setState({ totalPrice: price, ingredients: updatedIngredients });
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseBurger = () => {
		this.setState({ isOrdering: true });
	}

	cancelPurchase = () => {
		this.setState({ isOrdering: false });
	}

	continuePurchase = () => {
		const queryParams = [];

		for (let i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
		}

		const queryString = queryParams.join("&");

		this.props.history.push({
			pathname: "/checkout",
			search: `?${queryString}`
		});
		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: "Shawn",
		// 		address: {
		// 			zip: "ABC123",
		// 			street: "Baker Street",
		// 			country: "United Kingdom"
		// 		}
		// 	}
		// };

		// this.setState({ isBusy: true });

		// httpConfig.post("/orders.json", order)
		// 	.then(response => this.setState({ isBusy: false, isOrdering: false }))
		// 	.catch(error => this.setState({ isBusy: false, isOrdering: false }));
	}

	render() {
		let overlayContent = null;
		let burger = this.state.isBusy ? <Spinner /> : <p>Ingredients could not be loaded.</p>;
		
		if (this.state.ingredients) {
			burger = <Fragment>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredient={this.addIngredient}
					removeIngredient={this.removeIngredient}
					canPurchase={this.state.canPurchase}
					isOrdering={this.purchaseBurger}
					price={this.state.totalPrice} />
			</Fragment>;

			overlayContent = <OrderSummary ingredients={this.state.ingredients}
				price={this.state.totalPrice}
				continuePurchase={this.continuePurchase}
				cancelPurchase={this.cancelPurchase} />
		}
		
		if (this.state.isBusy) {
			overlayContent = <Spinner />;
		}

		return (
			<Fragment>
				<Modal show={this.state.isOrdering} hide={this.cancelPurchase}>
					{overlayContent}
				</Modal>
				{burger}
			</Fragment>
		);
	}
}

export default BurgerBuilder;