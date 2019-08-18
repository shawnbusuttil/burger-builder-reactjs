import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import withErrorHandler from "../error-handler/error-handler.component"

import Burger from "../../components/burger/burger.component";
import BuildControls from "../../components/burger/build-controls/build-controls.component";
import OrderSummary from "../../components/burger/order-summary/order-summary.component";
import Modal from "../../components/modal/modal.component";
import Spinner from "../../components/spinner/spinner.component";

import httpConfig from "../../axios.config";
import * as ACTION_TYPES from "../../store/actions";

class BurgerBuilder extends Component {
	state = {
		isBusy: false,
		isOrdering: false
	}

	componentDidMount() {
		this.setState({ isBusy: true });
		httpConfig.get("/ingredients.json")
			.then(response => this.setState({ ingredients: response.data, isBusy: false }))
			.catch(error => this.setState({ isBusy: false }));
	}

	updatePurchaseState = () => {
		const sum = Object.keys(this.props.ingredients)
			.map(key => ingredients[key])
			.reduce((sum, item) => sum + item, 0);

		return sum > 0;
	}

	startPurchase = () => {
		this.setState({ isOrdering: true });
	}

	cancelPurchase = () => {
		this.setState({ isOrdering: false });
	}

	continuePurchase = () => {
		this.props.history.push("/checkout");
	}

	render() {
		let overlayContent = null;
		let burger = this.state.isBusy ? <Spinner /> : <p>Ingredients could not be loaded.</p>;
		
		if (this.props.ingredients) {
			burger = <Fragment>
				<Burger ingredients={this.props.ingredients} />
				<BuildControls
					price={this.props.totalPrice}
					canPurchase={this.updatePurchaseState}
					addIngredient={this.props.addIngredient}
					removeIngredient={this.props.removeIngredient}
					startPurchase={this.startPurchase} />
			</Fragment>;

			overlayContent = <OrderSummary ingredients={this.props.ingredients}
				price={this.props.totalPrice}
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

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients,
		totalPrice: state.totalPrice
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addIngredient: (ingredient) => dispatch({ 
			type: ACTION_TYPES.ADD_INGREDIENT, 
			payload: ingredient
		}),
		removeIngredient: (ingredient) => dispatch({ 
			type: ACTION_TYPES.REMOVE_INGREDIENT, 
			payload: ingredient
		})
	};
} 

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);