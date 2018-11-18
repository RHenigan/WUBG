const electron = require('electron')
const game = require("./game_modules/game");
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow


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
        player_window = new BrowserWindow({})
        player_window.setFullScreen(true);
    }

	dm_windows = new BrowserWindow({
		width: 500,
		height: 500
    })
})
