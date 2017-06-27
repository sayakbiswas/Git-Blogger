import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import LandingScreenContainer from './containers/LandingScreenContainer';
import LoggedInLandingScreenContainer from './containers/LoggedInLandingScreenContainer';

ReactDOM.render((
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/landing" component={LandingScreenContainer} />
			<Route path="/dashboard" component={LoggedInLandingScreenContainer} />
		</Switch>
	</HashRouter>
), document.getElementById('app'));
