import React from 'react';
import styles from '../styles/styles';
import globalVars from '../config/globalVars';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Button, Divider } from 'semantic-ui-react';

function Login(props) {
	console.log("inside Login");
	return(
		<Container text>
			<Header as='h1' style={styles.header}>Login</Header>
		</Container>
	);
}

Login.propTypes = {

};

module.exports = Login;
