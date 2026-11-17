const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 420, height: 820, minWidth: 360, minHeight: 600,
    icon: path.join(__dirname, 'icon-256.png'),
    backgroundColor: '#09090b',
    title: 'Symphony No. 9',
    autoHideMenuBar: true,
    webPreferences: { nodeIntegration: false, contextIsolation: true, webSecurity: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'www', 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
