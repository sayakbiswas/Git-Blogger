import React from 'react';
import styles from '../styles/styles';
import globalVars from '../config/globalVars';
import PropTypes from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

function Alert(props) {
	console.log('props in alert ', props);
	return(
		<Modal
			open={props.modalOpen}
			onClose={props.onModalClose}
			basic
			size='small'
		>
			<Header icon='warning circle' content={props.messageHeader} />
			<Modal.Content>
				<h3>{props.message}</h3>
			</Modal.Content>
			<Modal.Actions>
				<Button color='blue' onClick={props.onModalClose} inverted>
					<Icon name='checkmark' />Ok
				</Button>
			</Modal.Actions>
		</Modal>
	);
}

Alert.propTypes = {
	messageHeader: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	modalOpen: PropTypes.bool.isRequired,
	onModalClose: PropTypes.func.isRequired
};

module.exports = Alert;
