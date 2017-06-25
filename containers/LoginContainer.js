import React from 'react';
import Login from '../components/Login';
import globarVars from '../config/globalVars';

class LoginContainer extends React.Component {
	render() {
		console.log("inside login container render");
		return(
			<Login />
		);
	}
}

module.exports = LoginContainer;
