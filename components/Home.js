import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../styles/styles';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		};
	}

	render() {
		return(
			<div className='main-container' style={styles.mainContainer} >
				{(() => {
					if(this.state.isLoggedIn) {
						this.props.history.push("/dashboard");
					} else {
						this.props.history.push("/landing");
					}
				}) ()}
				{this.props.children}
			</div>
		);
	}
}

module.exports = withRouter(Home);
