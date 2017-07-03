import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../styles/styles';
import PropTypes from 'prop-types';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	componentDidMount() {
		//console.log("in Home::componentDidMount")
		var githubToken = window.localStorage.getItem('githubToken');
		console.log('githubToken ', githubToken);
		if(typeof githubToken === 'undefined' || githubToken == '' || githubToken === null) {
			console.log('pushing landing');
			this.setState({
				isLoggedIn: false
			});
			this.props.history.push("/landing");
		} else {
			console.log('pushing dashboard');
			this.setState({
				isLoggedIn: true
			});
			this.props.history.push("/dashboard");
		}
	}

	render() {
		//console.log("props in main ", this.props);
		return(
			<div className='main-container' style={styles.mainContainer} >
				{this.props.children}
			</div>
		);
	}
}

module.exports = withRouter(Home);
