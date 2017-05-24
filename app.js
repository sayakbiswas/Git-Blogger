var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
	routes, 
	document.getElementById('app')
);
