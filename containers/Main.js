import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import LandingScreenContainer from './LandingScreenContainer';
import DashboardContainer from './DashboardContainer';
import SetupScreenContainer from './SetupScreenContainer';

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
						<Route path="/landing" component={LandingScreenContainer} />
						<Route path="/dashboard" component={DashboardContainer} />
						<Route path="/setupnew" component={SetupScreenContainer} />
					</Switch>
				</Home>
			</HashRouter>
		);
	}
}

module.exports = Main;
