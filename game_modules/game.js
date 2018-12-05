// module.exports = function(){
//   // Game functions in here

//     gameTimer:function() {
//         var timer = 60 * 120, minutes, seconds;
//         setInterval(function () {
//             minutes = parseInt(timer / 60, 10);
//             seconds = parseInt(timer % 60, 10);

//             minutes = minutes < 10 ? "0" + minutes : minutes;
//             seconds = seconds < 10 ? "0" + seconds : seconds;

//             console.log(minutes + ":" + seconds);
            
//             --timer;
//         }, 1000);
//     }
// }

var playerCount = 100;

module.exports.gameTimer = function(){
    var timer = 60 * 120, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(minutes + ":" + seconds);

        --timer;
    }, 1000);
}

module.exports.playerCounter = function(){
    (function loop() {
        var  rand = Math.round(Math.random() * (100000 - 90000)) + 90000;
        var playerKiller = setInterval(function() {
            if(playerCount >= 0) {
                console.log(rand + " : " + playerCount);
                playerCount--;
                loop();
                clearInterval(playerKiller);
            } else {
                console.log('Still Looping');
                clearInterval(playerKiller);
            }
        }, rand);
    }());
}
