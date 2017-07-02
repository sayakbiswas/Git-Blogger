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
		console.log("in Home::componentDidMount")
		if(this.state.isLoggedIn) {
			this.props.history.push("/dashboard");
		} else {
			this.props.history.push("/landing");
		}
	}

	render() {
		console.log("props in main ", this.props);
		return(
			<div className='main-container' style={styles.mainContainer} >
				{this.props.children}
			</div>
		);
	}
}

module.exports = withRouter(Home);
