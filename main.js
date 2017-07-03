const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		height: 600,
		width: 800 
	});
	let url = require('url').format({
		protocol: 'file',
		slashes: true,
		pathname: require('path').join(__dirname, 'index.html')
	});
	const sess = mainWindow.webContents.session;
	mainWindow.on('closed', () => {
		sess.clearStorageData();
		sess.clearCache(function() {
			console.log('cleared cache');
		});
		mainWindow = null
	});
	console.log(url);
	mainWindow.loadURL(url);
});
