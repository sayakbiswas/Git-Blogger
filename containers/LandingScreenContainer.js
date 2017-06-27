import React from 'react';
import PropTypes from 'prop-types';
import globalVars from '../config/globalVars';
import LandingScreen from '../components/LandingScreen';

class LandingScreenContainer extends React.Component {
	render() {
		console.log("match in container ", this.props.match);
		return(
			<LandingScreen 
				match={this.props.match} />
		);
	}
}

module.exports = LandingScreenContainer;
