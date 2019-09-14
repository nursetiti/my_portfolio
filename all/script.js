window.onload = function() {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var mSecs = 0;
  var appendHours = document.getElementById("hours");
  var appendMinutes = document.getElementById("minutes");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonPause = document.getElementById("button-pause");
  var buttonStop = document.getElementById("button-stop");
  var Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonPause.onclick = function() {
    clearInterval(Interval);
  };

  buttonStop.onclick = function() {
    clearInterval(Interval);
    hours = "00";
    minutes = "00";
    mSecs = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;
  };

  function startTimer() {
    mSecs++;

    if (mSecs > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = seconds;
      mSecs = 0;
      if (seconds < 10) {
        appendSeconds.innerHTML = "0" + seconds;
      } else {
        appendSeconds.innerHTML = seconds;
      }
    }
    if (seconds >= 60) {
      seconds = "0" + 0;
      minutes++;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
      if (minutes < 10) {
        appendMinutes.innerHTML = "0" + minutes;
      } else {
        appendMinutes.innerHTML = minutes;
      }
    }
    if (minutes >= 60) {
      minutes = "0" + 0;
      hours++;
      appendMinutes.innerHTML = minutes;
      appendHours.innerHTML = hours;
    }
  }
};
