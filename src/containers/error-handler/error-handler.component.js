import React, { Component, Fragment } from "react";
import httpConfig from "../../axios.config";

import Modal from "../../components/modal/modal.component";

const withErrorHandler = (TranscludedComponent) => {
	return class extends Component {
		state = {
			error: null
		};

		requestInterceptor = httpConfig.interceptors.request.use(request => {
			this.setState({error: null});
			return request;
		});

		responseInterceptor = httpConfig.interceptors.response.use(null, error => {
			this.setState({error: error});
		});

		componentWillUnmount() {
			httpConfig.interceptors.request.eject(this.requestInterceptor);
			httpConfig.interceptors.response.eject(this.responseInterceptor);
		}

		errorDismissed = () => {
			this.setState({ error: null });
		}

		render() {
			return (
				<Fragment>
					<Modal show={this.state.error} hide={this.errorDismissed}>
						{this.state.error && this.state.error.message}
					</Modal>
					<TranscludedComponent {...this.props} />
				</Fragment>
			);
		}
	}
}

export default withErrorHandler;