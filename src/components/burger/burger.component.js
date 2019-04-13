import React from "react";

import classes from "./burger.component.scss";
import Ingredient from "./ingredient/ingredient.component";

const Burger = (props) => {
	let ingredients = Object.keys(props.ingredients)
		.map(key => {
			return [...Array(props.ingredients[key])].map((_, i) => {
				return <Ingredient key={key + i} type={key} />
			})
		})
		.reduce((arr, el) => {
			return arr.concat(el)
		}, []);
	
	if (ingredients.length === 0) {
		ingredients = <p>Your burger is currently just made up of bread...</p>;
	}
	
	return (
		<div className={classes.burger}>
			<Ingredient type="breadTop"></Ingredient>
			{ingredients}
			<Ingredient type="breadBottom"></Ingredient>
		</div>
	);
}

export default Burger;