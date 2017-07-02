import React from 'react';
import styles from '../styles/styles';
import globalVars from '../config/globalVars';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Button, Divider } from 'semantic-ui-react';

function LandingScreen(props) {
	console.log("props :: ", props);
	return(
		<Container text>
			<Header as='h1' style={styles.header}>Git Blogger</Header>
			<Header as='h3' style={styles.header}>An all in one personal website/blogging tool.</Header>
			<Segment padded>
				<Button primary fluid onClick={props.onLoginClicked}>
					Log In
				</Button>
				<Divider horizontal> OR </Divider>
				<Button secondary fluid>Set up a new Website</Button>
				<Divider horizontal> OR </Divider>
				<Button secondary fluid>Clone an existing website</Button>
				<Divider horizontal> OR </Divider>
				<Button negative>Exit</Button>
			</Segment>
		</Container>
	);
}

LandingScreen.propTypes = {
	onLoginClicked: PropTypes.func.isRequired
};

module.exports = LandingScreen;
