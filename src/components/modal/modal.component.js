import React, { Component, Fragment } from "react";

import classes from "./modal.component.scss";

import Backdrop from "./../backdrop/backdrop.component";

class Modal extends Component {
	shouldComponentUpdate(nextProps, _nextState) {
		return nextProps.show !== this.props.show;
	}

	render() {
		return (
			<Fragment>
				<Backdrop show={this.props.show} clicked={this.props.hide} />
				<div className={[classes.modal, this.props.show ? classes.open : classes.closed].join(" ")}>
					{this.props.children}
				</div>
			</Fragment>
		);
	}
} 

export default Modal;