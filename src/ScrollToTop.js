import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
	getLocation = () => {
		let i = document.querySelector('.active');
		let meter = document.getElementById('meter');
		if (i) {
			i = i.id;
			meter.style.left = "calc( 100% / 5 * " + i + ")";
		} else {
			meter.style.left = "calc( 100% / 5 * -1 )";
		}
	}
	componentDidMount() {
		this.getLocation();
	}
	componentDidUpdate(prevProps) {
		this.getLocation();
		// console.log(this.props.location);
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}
	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);