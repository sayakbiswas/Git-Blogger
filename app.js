import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter } from 'react-router-dom';
import Home from './components/Home';

ReactDOM.render((
	<HashRouter>
		<Home />
	</HashRouter>
), document.getElementById('app'));
