const electron = require('electron');
const app = electron.app;
const path = require('path');
const url = require('url');
const BrowserWindow = electron.BrowserWindow;
var mainWindow;
app.on('ready',function(){
  mainWindow = new BrowserWindow({width: 170, height: 303});
  //mainWindow.loadURL('https://github.com');
   mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'currency.html'),
    protocol: 'file:',
    slashes: true
  }));
});


