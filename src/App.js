import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-42592562-2');

// Content
import Home from './content/Home';
import Annenberg from './content/Annenberg';
import Systems from './content/Systems';
import Eng from './content/Eng';
import ATV from './content/ATV';
import Whiteboard from './content/Whiteboard';
import Resume from './content/Resume';


class App extends Component {

	currentTo = (i, event) => {
		document.getElementById('meter').style.left = "calc( 100% / 6 * " + i + ")";
	}

	logPageView = () => {
		ReactGA.pageview(window.location.hash);
	}

	render() {

		const navLinks = ["/", "/Pandora-10ft", "/Pandora-Systems", "/Pandora-Dashboard", "/USC-Annenberg", "/Whiteboard-Sessions"]

		return (
			<div>
				<Helmet>
					<title>Joyce Lau - ux/ui designer</title>
				</Helmet>
				<Router onUpdate={this.logPageView}>
					<div>	
						<nav className="global-nav">

							<div id="meter"></div>

						    { navLinks.map((links, i) => {
						    	return (
						    		<NavLink 
										exact to={links} 
										id={i}
										activeClassName="active"
										onClick={(event) => this.currentTo(i, event)} >
						    		i</NavLink>
						    	)
						    }) }

						</nav>
						<ScrollToTop>
							<main>
								<Route exact path="/" component={Home} />
								<Route path="/Pandora-10ft" component={ATV} />
								<Route path="/Pandora-Systems" component={Systems} />
								<Route path="/Pandora-Dashboard" component={Eng} />
								<Route path="/USC-Annenberg" component={Annenberg} />
								<Route path="/Whiteboard-Sessions" component={Whiteboard} />
								<Route path="/Resume" component={Resume} />
							</main>
						</ScrollToTop>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
