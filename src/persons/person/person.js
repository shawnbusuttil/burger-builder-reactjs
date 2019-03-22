import React, { useEffect } from "react";

import styles from "./person.scss";

const Person = (props) => {
	useEffect(() => {
		console.log("use effect");
		// http request...
	}, [props.persons]);
	
	return (
		<div className={styles.person}>
			<p onClick={props.clicked}>My name is {props.name} and I am {props.age} years old.</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.changed}/>
		</div>
	);
};

export default Person;