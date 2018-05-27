const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

var mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'main.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('close', () => {
    mainWindow = null;
  });

  mainWindow.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('active', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
