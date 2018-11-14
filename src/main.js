const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes <10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

app.on('ready', _ => {
	mainWindow = new BrowserWindow({
		width: 500,
		height: 500
	})

    var OneHundredEightyMinutes = 60 * 180;
    startTimer(OneHundredEightyMinutes);
})
