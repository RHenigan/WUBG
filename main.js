const electron = require('electron')
const game = require("./game_modules");
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow


app.on('ready', _ => {
	dm_windows = new BrowserWindow({
		width: 500,
		height: 500
    })
    
    player_window = new BrowserWindow({
        width:500,
        height:500
    })


})
