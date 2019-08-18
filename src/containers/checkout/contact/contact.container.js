import React, { Component } from "react";

import Button from "../../../components/button/button.component";
import Spinner from "../../../components/spinner/spinner.component";

import classes from "./contact.container.scss";

/* TODO: Convert to use react-advanced-form */
class Contact extends Component {
    state = {
        name: "",
        email: "",
        street: "",
        postcode: ""
    }

    valueChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    isFormValid = () => {
        for (let key of Object.keys(this.state)) {
            if (this.state[key] === "") {
                return false;
            }
        }
        return true;
    }

    onSubmit = (event) => {
        event.preventDefault();

        const customerData = {
            name: this.state.name,
            email: this.state.email,
            address: {
                street: this.state.street,
                postcode: this.state.postcode
            }
        };

        this.props.placeOrder(customerData);
    }

    render() {
        let form = null;

        if (this.props.isBusy) {
            form = <Spinner />;
        } else {
            form = <form onSubmit={this.onSubmit} noValidate>
                <div className={classes.control}>
                    <label>Name: </label> 
                    <input type="text" name="name" value={this.state.name} placeholder="Name" 
                        onChange={this.valueChanged} required />
                </div>
                <div className={classes.control}>
                    <label>Email: </label> 
                    <input type="email" name="email" value={this.state.email} placeholder="Email" 
                        onChange={this.valueChanged} required />
                </div>
                <div className={classes.control}>
                    <label>Street: </label> 
                    <input type="text" name="street" value={this.state.street} placeholder="Street" 
                        onChange={this.valueChanged} required />
                </div>
                <div className={classes.control}>
                    <label>Zip Code: </label>
                    <input type="text" name="postcode" value={this.state.postcode} placeholder="Zip Code" 
                        onChange={this.valueChanged} required />
                </div>

                <Button type="success" disabled={!this.isFormValid()}>Place Order</Button>
            </form>
        }

        return (
            <div className={classes.contact}>
                <h4>Enter your contact data:</h4>
                {form}
            </div>
        );
    }
}

export default Contact;