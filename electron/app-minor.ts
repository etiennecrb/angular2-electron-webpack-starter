import { BrowserWindow, ipcMain } from 'electron';
import * as url from 'url';
import * as path from 'path';

ipcMain.on('openAppMinor', () => {
  // Create the browser window.
  const minorWin = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  minorWin.loadURL(url.format({
    pathname: path.join(__dirname, 'app-minor.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  minorWin.webContents.openDevTools()
});
