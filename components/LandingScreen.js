import React from 'react';
import styles from '../styles/styles';
import globalVars from '../config/globalVars';
import PropTypes from 'prop-types';
import { Container, Header, Segment, Button, Divider } from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';
import { LoginContainer } from '../containers/LoginContainer';
import { LandingScreenContainer } from '../containers/LandingScreenContainer';

function LandingScreen(props) {
	return(
		<Container text>
			<Header as='h1' style={styles.header}>Git Blogger</Header>
			<Header as='h3' style={styles.header}>An all in one personal website/blogging tool.</Header>
			<Segment padded>
				<Link to='login'>
					<Button primary fluid>
						Log In
					</Button>
				</Link>
				<Divider horizontal> OR </Divider>
				<Button secondary fluid>Set up a new Website</Button>
				<Divider horizontal> OR </Divider>
				<Button secondary fluid>Clone an existing website</Button>
				<Divider horizontal> OR </Divider>
				<Button negative>Exit</Button>
			</Segment>
			<div>
				<Switch>
					<Route exact path='/' component={LandingScreenContainer} />
					<Route path='/login' component={LoginContainer} />
				</Switch>
			</div>
		</Container>
	);
}

LandingScreen.propTypes = {

};

module.exports = LandingScreen;
