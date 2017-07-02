import React from 'react';
import styles from '../styles/styles';
import globalVars from '../config/globalVars';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

function Dashboard(props) {
	return(
		<Container text>
			This is the dashboard!
		</Container>
	);
}

Dashboard.propTypes = {

};

module.exports = Dashboard;
