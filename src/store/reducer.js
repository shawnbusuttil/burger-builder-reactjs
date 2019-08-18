import * as ACTION_TYPES from "./actions.js";

const INITIAL_STATE = {
    ingredients: {
        meat: 0,
        bacon: 0,
        salad: 0,
        cheese: 0
    },
    totalPrice: 0
};

const INGREDIENT_PRICES = {
	meat: 1.5,
	bacon: 0.8,
	salad: 0.5,
	cheese: 0.4
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_TYPES.ADD_INGREDIENT: {
            const ingredient = action.payload;
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [ingredient]: state.ingredients[ingredient] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[ingredient]
            };
            break;
        }
        case ACTION_TYPES.REMOVE_INGREDIENT: {
            const ingredient = action.payload;
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [ingredient]: state.ingredients[ingredient] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[ingredient]
            };
            break;
        }
        default:
            return state;
    }
};

export default reducer;