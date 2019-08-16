import React from "react"

import Burger from "../../burger/burger.component";
import Button from "../../button/button.component";

import classes from "./checkout-summary.component.scss";

const CheckoutSummary = (props) => {
	return (
		<div className={classes.summary}>
			<h1>We hope it tastes well!</h1>
			<div style={{ width: "100%", margin: "auto" }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button type="warn" clicked={props.cancelCheckout}>Cancel</Button>
			<Button type="success" clicked={props.continueCheckout}>Submit</Button>
		</div>
	);
}

export default CheckoutSummary;