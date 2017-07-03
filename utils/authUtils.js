/**
 * Most of the code here is from the page: http://manos.im/blog/electron-oauth-with-github/
 */

const electron = require('electron').remote;
const BrowserWindow = electron.BrowserWindow;
import authOptions from '../config/authOptions';

var GithubAuthenticate = function() {
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
		handleCallback(url, authWindow);
	});

	authWindow.webContents.on('did-get-redirect-request', function(event, oldUrl, newUrl) {
		handleCallback(newUrl, authWindow);
	});

	authWindow.on('close', function() {
		authWindow = null;
	}, false);
}


function handleCallback(url, authWindow) {
	var raw_code = /code=([^&]*)/.exec(url) || null;
	var code = (raw_code && raw_code.length > 1) ? raw_code[1] : null;
	var error = /\?error=(.+)$/.exec(url);

	if(code || error) {
		authWindow.destroy();
	}

	if(code) {
		requestGithubToken(code);
	} else if(error) {
		alert("Couldn't login to GitHub! Please try again.");
	}
}



function requestGithubToken(code) {
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
	}).catch(function(error) {
		alert('There was a problem getting the access token. Please retry.');
	});
}

module.exports = GithubAuthenticate;
