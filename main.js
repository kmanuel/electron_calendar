//noinspection NodeJsCodingAssistanceForCoreModules
const path = require('path');
const fs = require('fs');
const electron = require('electron');
const {app, BrowserWindow, Tray} = require('electron');

let mainWindow, tray;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 200,
        show: false,
        frame: false,
        resizable: false,
        webPreferences: {backgroundThrottling: false}
    });
    mainWindow.loadURL('http://localhost:3000/');
}

function toggleWindowVisibility() {
    if (mainWindow.isVisible()) {
        mainWindow.hide();
    } else {
        mainWindow.show();
    }
}

function createTray() {
    const iconPath = path.join(__dirname, `./assets/calendar.png`);
    tray = new Tray(iconPath);
    tray.on('click', toggleWindowVisibility);
}

function init() {
    createMainWindow();
    createTray();
}

let createApp = function () {
    app.on('ready', init);

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (mainWindow === null) {
            init();
        }
    });
};

createApp();