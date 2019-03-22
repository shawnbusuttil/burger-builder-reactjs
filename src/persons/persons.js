import React, { Component } from "react";

import Person from "./person/person";

class Persons extends Component {

	shouldComponentUpdate(nextProps, _nextState) {
		console.log("you updated the state correctly");
		return nextProps.persons !== this.props.persons;
	}

	render() {
		return this.props.persons.map((person, index) =>
			<Person 
				key={person.id}
				name={person.name}
				age={person.age}
				clicked={() => this.props.clicked(index)}
				changed={(event) => this.props.changed(event, person.id)}>
			</Person>
		);
	}
}

export default React.memo(Persons);