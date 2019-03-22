import React, { Component } from "react";
import styles from "./app.scss";

import Persons from "./persons/persons";

export class App extends Component {
	state = {
		persons: [
			{ id: 0, name: "Naruto", age: 26 },
			{ id: 1, name: "Sasuke", age: 26 },
			{ id: 2, name: "Sakura", age: 26 }
		],
		showPersons: false
	};
	
	render() {
		let persons;

		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons 
						persons={this.state.persons}
						clicked={this.deletePerson}
						changed={this.onNameChanged}>
					</Persons>
				</div>
			);
		}

		return (
			<div className={styles.app}>
				<h1>Hello World</h1>
				<button onClick={this.togglePersons}>Toggle Persons</button>
				{persons}
			</div>
		);
	}

	onNameChanged = (event, id) => {
		const index = this.state.persons.findIndex(i => i.id === id);
		const person = { 
			...this.state.persons[index], 
			name: event.target.value 
		};

		const persons = [...this.state.persons];
		persons[index] = person;

		this.setState({ persons: persons });
	}

	togglePersons = () => this.setState({ showPersons: !this.state.showPersons });

	deletePerson = (index) => {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({ persons: persons });
	}
}

export default App;