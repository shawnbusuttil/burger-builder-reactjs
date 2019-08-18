import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers } from "redux";

import reducer from "./store/reducer";

import "./app.scss";

import App from "./app";

// convert to use combineReducers
const appState = createStore(reducer);

const app = (
	<Provider store={appState}>
		<BrowserRouter basename="/">
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
