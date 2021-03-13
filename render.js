const { app, BrowserWindow } = require('electron'),
  path = require('path'),
  server = require("./server.js");


function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 750,
    frame: false, 
    titleBarStyle: 'hidden',
    webPreferences: {
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
    }
  })

    mainWindow.setMenu(null);
    mainWindow.setIcon('icon.png');
    mainWindow.loadURL('http://localhost:3000/');

  mainWindow.on('closed', function() {
    mainWindow = null
})
}

app.whenReady().then(createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
    
  }
})



