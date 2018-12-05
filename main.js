const { app, BrowserWindow, dialog } = require('electron');
const game = require("./game_modules/game");
const gameModule = require('./game_modules/game');
const electron = require('electron');

let dm_windows;
let player_window;
let exit_prompt = false;

app.on('ready', _ => {
    var electronScreen = electron.screen;
    var displays = electronScreen.getAllDisplays();
    var externalDisplay = null;
    
    for (i in displays) {
       if (displays[i].bounds.x != 0 || displays[i].bounds.y != 0) {
            externalDisplay = displays[i];
            break;
        }
    }

    if(externalDisplay) {
        player_window = new BrowserWindow({
	        x: externalDisplay.bounds.x + 50,
            y: externalDisplay.bounds.y + 50
        })
        player_window.setFullScreen(true);
    } else {
	    player_window = new BrowserWindow({
	        width: 500,
		    height: 500
        })
    }

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

    gameModule.playerCounter();

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
