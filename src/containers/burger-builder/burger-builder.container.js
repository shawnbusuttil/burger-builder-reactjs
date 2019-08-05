import React, { Component, Fragment } from "react";

import Burger from "../../components/burger/burger.component";
import BuildControls from "../../components/burger/build-controls/build-controls.component";
import OrderSummary from "../../components/burger/order-summary/order-summary.component";
import Modal from "../../components/modal/modal.component";

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.5,
	bacon: 0.8
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			meat: 0,
			salad: 0,
			bacon: 0,
			cheese: 0
		},
		totalPrice: 0,
		isOrdering: false,
		canPurchase: false
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
		alert("You bought the burger!");
	}

	render() {
		return (
			<Fragment>
				<Modal show={this.state.isOrdering} hide={this.cancelPurchase}>
					<OrderSummary ingredients={this.state.ingredients}
						price={this.state.totalPrice}
						continuePurchase={this.continuePurchase}
						cancelPurchase={this.cancelPurchase} />
				</Modal>
				<Burger ingredients={this.state.ingredients}></Burger>
				<BuildControls
					addIngredient={this.addIngredient}
					removeIngredient={this.removeIngredient}
					canPurchase={this.state.canPurchase}
					isOrdering={this.purchaseBurger}
					price={this.state.totalPrice} />
			</Fragment>
		);
	}
}

export default BurgerBuilder;