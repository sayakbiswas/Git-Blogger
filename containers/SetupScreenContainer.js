import React from 'react';
import globalVars from '../config/globalVars';
import SetupScreen from '../components/SetupScreen';
import GitHubAPIUtils from '../utils/GitHubAPIUtils';

class SetupScreenContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('rendering');
		return(
			<SetupScreen />
		);
	}
}

module.exports = SetupScreenContainer;
