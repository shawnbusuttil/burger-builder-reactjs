import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./app.scss";

import App from "./app";

const app = (
	<BrowserRouter basename="/">
		<App />
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
