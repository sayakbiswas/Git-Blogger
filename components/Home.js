import React from 'react';
import { Route } from 'react-router-dom';
import styles from '../styles/styles';
import LandingScreenContainer from '../containers/LandingScreenContainer';
import LoggedInLandingScreenContainer from '../containers/LoggedInLandingScreenContainer';

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
						return(
							<div>
								<Route exact path="/" component={LoggedInLandingScreenContainer} />
							</div>
						);
					} else {
						return(
							<div>
								<Route exact path="/" component={LandingScreenContainer} />
							</div>
						);
					}
				}) ()}
			</div>
		);
	}
}

module.exports = Home;
