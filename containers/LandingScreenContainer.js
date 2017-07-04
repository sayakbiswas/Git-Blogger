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
				Promise.all([
					GitHubAPIUtils.getAuthenticatedUser(),
					GitHubAPIUtils.getAuthenticatedUserRepos()
				])
				.then(function(result) {
					console.log("result ", result);	
					var username = result[0].login;
					var websiteRepo = result[1].filter(function(repo) {
						return repo.name == username + '.github.io';
					});
					console.log(websiteRepo);
					websiteRepo.pop();
					if(websiteRepo.length > 0) {
						this.props.history.push("/dashboard");
					} else {
						this.props.history.push("/setupnew");
					}
				}.bind(this))
				.catch(function(error) {
					console.log("Error while calling one ot more GitHub APIs", error);
				});
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
