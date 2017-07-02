import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import LandingScreenContainer from './LandingScreenContainer';
import DashboardContainer from './DashboardContainer';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<HashRouter>
				<Home>		
					<Switch>
						<Route exact path="/" component={LandingScreenContainer} />
						<Route exact path="/landing" component={LandingScreenContainer} />
						<Route path="/dashboard" component={DashboardContainer} />
					</Switch>
				</Home>
			</HashRouter>
		);
	}
}

module.exports = Main;
