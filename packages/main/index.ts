import { app, BrowserWindow, shell, dialog, ipcMain } from 'electron';
import fs from 'fs/promises';
import { release } from 'os';
import { join } from 'path';

if (release().startsWith('6.1')) app.disableHardwareAcceleration();
if (process.platform === 'win32') app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
    app.quit();
    process.exit(0);
}

let win: BrowserWindow | null = null;

ipcMain.handle('my-invokable-ipc', async (event, ...args) => {
    if (!win) return null;
    const chosenFile = await dialog.showOpenDialog(win, {
        filters: [{ name: 'Custom File Type', extensions: ['dfj'] }]
    });
    if (chosenFile.canceled) return null;
    const [path] = chosenFile.filePaths;
    const fileContent = await fs.readFile(path, { encoding: 'utf-8' });
    return fileContent;
});

async function createWindow() {
    win = new BrowserWindow({
        title: 'Main window',
        webPreferences: {
            preload: join(__dirname, '../preload/index.cjs')
        }
    });

    if (app.isPackaged || process.env['DEBUG']) {
        win.loadFile(join(__dirname, '../renderer/index.html'));
    } else {
        const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`;
        win.loadURL(url);
        win.webContents.openDevTools();
    }

    win.webContents.setWindowOpenHandler(({ url }) => {
        if (url.startsWith('https:')) shell.openExternal(url);
        return { action: 'deny' };
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    win = null;
    if (process.platform !== 'darwin') app.quit();
});

app.on('second-instance', () => {
    if (win) {
        if (win.isMinimized()) win.restore();
        win.focus();
    }
});

app.on('activate', () => {
    const allWindows = BrowserWindow.getAllWindows();
    if (allWindows.length) {
        allWindows[0].focus();
    } else {
        createWindow();
    }
});
