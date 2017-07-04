import React from 'react';
import styles from '../styles/styles';
import globalVars from '../config/globalVars';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

function SetupScreen(props) {
	return(
		<Container text>
			This is the setup screen!
		</Container>
	);
}

SetupScreen.propTypes = {
	
};

module.exports = SetupScreen;
