module.exports = function(){
  // Game functions in here

    gameTimer:function() {
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
}
