import React from 'react';
import PropTypes from 'prop-types';
import globalVars from '../config/globalVars';
import LandingScreen from '../components/LandingScreen';
import GithubAuthenticate from '../utils/authUtils';

class LandingScreenContainer extends React.Component {
	handleLoginClicked() {
		console.log("Login Button Clicked");
		GithubAuthenticate();
		alert("token: " + window.localStorage.getItem('githubToken'));
	}

	render() {
		console.log("match in container ", this.props.match);
		return(
			<LandingScreen 
				match={this.props.match}
				onLoginClicked={this.handleLoginClicked}
			/>
		);
	}
}

module.exports = LandingScreenContainer;
