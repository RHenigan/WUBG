const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

let TWO_HOURS = 60 * 120;

function startTimer() {
    var timer = TWO_HOURS, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes <10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(seconds == 0) {
            console.log(minutes);
        }
        if(minutes == 180) {
            console.log("prepare for landing");
        } else if(minutes == 150 && seconds == 0) {
            console.log("Strom shrinking");
        } else if(minutes == 120 && seconds == 0) {
            console.log("Storm Shrunk");
        } else if(minutes == 100 && seconds == 0) {
            console.log("Storm shrinking");
        } else if(minutes == 80 && seconds == 0) {
            console.log("Strom shrunk");
        } else if(minutes == 65 && seconds == 0) {
            console.log("Storm shrinking");
        } else if(minutes == 50 && seconds == 0) {
            console.log("Storm shrunk");
        } else if(minutes == 40 && seconds == 0) {
            console.log("Strom shrinking");
        } else if(minutes == 30 && seconds == 0) {
            console.log("Storm shrunk");
        }

        --timer

    }, 1000);
}

app.on('ready', _ => {
	mainWindow = new BrowserWindow({
		width: 500,
		height: 500
	})

    startTimer();
})
