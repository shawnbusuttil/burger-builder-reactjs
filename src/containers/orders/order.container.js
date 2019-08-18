import React, { Component, Fragment } from "react";

import httpConfig from "../../axios.config";

import Order from "../../components/order/order.component";
import withErrorHandler from "../error-handler/error-handler.component";

class Orders extends Component {
    state = {
        orders: [],
        isBusy: false
    };

    componentDidMount() {
        this.setState({ isBusy: true });

        httpConfig.get("/orders.json")
            .then(res => {
                console.log(res.data);
                const orders = [];

                for (let key in res.data) {
                    orders.push({
                        id: key,
                        ...res.data[key]
                    });
                }

                this.setState({ orders: orders, isBusy: false });
            })
            .catch(error => this.setState({ isBusy: false }))
    }

    render() {
        const orders = this.state.orders.map(order => 
            <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
        );

        return (
            <Fragment>
                {orders}
            </Fragment>
        );
    }
}

export default withErrorHandler(Orders);