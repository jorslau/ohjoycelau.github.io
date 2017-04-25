import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		console.log(this.props);
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}
	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);