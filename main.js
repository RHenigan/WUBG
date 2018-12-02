const { app, BrowserWindow, dialog } = require('electron');
const game = require("./game_modules/game");
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow

let dm_windows;
let player_window;
let exit_prompt = false;


app.on('ready', _ => {
    dm_windows = new BrowserWindow({
        width: 1300,
        minWidth: 1300,
        height: 1000

    })

    dm_windows.on('close', exit);

    dm_windows.loadURL(`file://${__dirname}/assets/html/dm.html`);

    player_window = new BrowserWindow({
        width: 500,
        height: 500
    })

    player_window.on('close', exit)
})


// Support Functions
function exit(event) {
    if (!exit_prompt) {
        event.preventDefault();
        const options = {
            type: 'info',
            title: 'Exit WUBG?',
            message: 'Are you sure you want to quit WUBG?',
            buttons: ['Yes', 'No']
        }
        dialog.showMessageBox(options, index => {
            if (index === 0) {
                exit_prompt = true;
                dm_windows = null;
                player_window = null;
                app.quit();
            }
        })
    }
}
