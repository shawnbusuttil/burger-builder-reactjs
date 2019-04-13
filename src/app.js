import React, { Component } from "react";

import Layout from "./components/layout/layout.component";
import BurgerBuilder from "./containers/burger-builder/burger-builder.container";

export class App extends Component {	
	render() {
		return (
			<Layout>
				<BurgerBuilder></BurgerBuilder>
			</Layout>
		);
	}
}

export default App;