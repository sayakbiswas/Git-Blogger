import React from 'react';
import globalVars from '../config/globalVars';
import SetupScreen from '../components/SetupScreen';

class SetupScreenContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<SetupScreen />
		);
	}
}

module.exports = SetupScreenContainer;
