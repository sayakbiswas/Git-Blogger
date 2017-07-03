/**
 * Most of the code here is from the page: http://manos.im/blog/electron-oauth-with-github/
 */

const electron = require('electron').remote;
const BrowserWindow = electron.BrowserWindow;
import authOptions from '../config/authOptions';

var GithubAuthenticate = function(callback) {
	//console.log("Inside github authenticate");
	var authWindow = new BrowserWindow({
		height: 600,
		width: 600,
		show: false,
		webPreferences: {
			nodeIntegration: false
		}
	});

	var githubUrl = 'http://github.com/login/oauth/authorize?';
	var authUrl = githubUrl + 'client_id=' + authOptions.client_id + '&scope=' + authOptions.scopes;
	authWindow.loadURL(authUrl);
	authWindow.show();
	authWindow.webContents.on('will-navigate', function(event, url) {
		handleCallback(url, authWindow, callback);
	});

	authWindow.webContents.on('did-get-redirect-request', function(event, oldUrl, newUrl) {
		handleCallback(newUrl, authWindow, callback);
	});

	authWindow.on('close', function() {
		authWindow = null;
	}, false);
}


function handleCallback(url, authWindow, callback) {
	var raw_code = /code=([^&]*)/.exec(url) || null;
	var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
	var error = /\?error=(.+)$/.exec(url);

	if(code || error) {
		authWindow.destroy();
	}

	if(code) {
		requestGithubToken(code, callback);
	} else if(error) {
		//alert("Couldn't login to GitHub! Please try again.");
		callback();
	}
}



function requestGithubToken(code, callback) {
	//console.log('received code ', code);
	var githubRequest = new Request('https://git-blogger-gatekeeper.herokuapp.com/authenticate/' + code);
	fetch(githubRequest).then(function(response) {
		if(response && response.ok) {
			//console.log(response);
			return response.json();
		}
		throw new Error('Problem with the GitHub response');
	}).then(function(data) {
		//console.log(data);
		window.localStorage.setItem('githubToken', data.token);
		callback();
	}).catch(function(error) {
		//alert('There was a problem getting the access token. Please retry.');
		callback();
	});
}

module.exports = GithubAuthenticate;
