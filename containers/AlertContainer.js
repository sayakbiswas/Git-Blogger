import React from 'react';
import globalVars from '../config/globalVars';
import Alert from '../components/Alert';

class AlertContainer extends React.Component {
	constructor(props) {
		super(props);
		//console.log('props in alertcontainer constructor ', this.props);
		this.state = {
			messageHeader: this.props.messageHeader,
			message: this.props.message,
			modalOpen: this.props.modalOpen
		};

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleOpen() {
		this.setState({
			modalOpen: true
		});
	}

	handleClose() {
		this.setState({
			messageHeader: '',
			message: '',
			modalOpen: false
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			messageHeader: nextProps.messageHeader,
			message: nextProps.message,
			modalOpen: nextProps.modalOpen
		});
	}

	render() {
		//console.log('props in alertcontainer render ', this.props);
		//console.log('state in alertcontainer render ', this.state);
		return(
			<Alert 
				messageHeader={this.state.messageHeader}
				message={this.state.message}
				modalOpen={this.state.modalOpen}
				onModalClose={this.handleClose}
			/>
		);
	}
}

module.exports = AlertContainer;
