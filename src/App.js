import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Content
import Home from './content/Home';
import Annenberg from './content/Annenberg';
import Blog from './content/Blog';
import Eng from './content/Eng';
import Whiteboard from './content/Whiteboard';
import Resume from './content/Resume';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li><Link to="/Home">Home</Link></li>
							<li><Link to="/USC-Annenberg">USC Annenberg</Link></li>
							<li><Link to="/Pandora-Blog">Pandora Blog</Link></li>
							<li><Link to="/Pandora-Dashboard">Pandora Dashboard</Link></li>
							<li><Link to="/Whiteboard-Sessions">Whiteboard Sessions</Link></li>
							<li><Link to="/Resume">Resume</Link></li>
						</ul>
					</nav>
					<ScrollToTop>
						<main>
							<Route exact path="/Home" component={Home} />
							<Route path="/USC-Annenberg" component={Annenberg} />
							<Route path="/Pandora-Blog" component={Blog} />
							<Route path="/Pandora-Dashboard" component={Eng} />
							<Route path="/Whiteboard-Sessions" component={Whiteboard} />
							<Route path="/Resume" component={Resume} />
						</main>
					</ScrollToTop>
				</div>
			</Router>
		);
	}
}

export default App;
