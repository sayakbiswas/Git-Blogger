import React from 'react';
import PropTypes from 'prop-types';
import globalVars from '../config/globalVars';
import LandingScreen from '../components/LandingScreen';
import GithubAuthenticate from '../utils/authUtils';
import { withRouter } from 'react-router-dom';
import GitHubAPIUtils from '../utils/GitHubAPIUtils';

class LandingScreenContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			showLoginFailedMessage: false
		};

		this.handleLoginClicked = this.handleLoginClicked.bind(this);
	}

	handleLoginClicked() {
		//console.log("Login Button Clicked");
		GithubAuthenticate(function() {
			var githubToken = window.localStorage.getItem('githubToken');
			if(typeof githubToken === 'undefined' || githubToken == '' || githubToken === null) {
				this.setState({
					isLoggedIn: false,
					showLoginFailedMessage: true
				});
			} else {
				this.setState({
					isLoggedIn: true,
					showLoginFailedMessage: false
				});
				var username = GitHubAPIUtils.getAuthenticatedUser();
				var repos = GitHubAPIUtils.getAuthenticatedUserRepos();
				this.props.history.push("/dashboard");
			}
		}.bind(this));
	}

	render() {
		//console.log("match in container ", this.props.match);
		return(
			<LandingScreen 
				match={this.props.match}
				onLoginClicked={this.handleLoginClicked}
				showLoginFailedMessage={this.state.showLoginFailedMessage}
			/>
		);
	}
}

module.exports = withRouter(LandingScreenContainer);
