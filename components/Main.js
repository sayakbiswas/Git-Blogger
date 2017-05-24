var React = require('react');
var ReactRouter = require('react-router');

var Main = React.createClass({
	render: function() {
		return(
			<div className='main-container'>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;
