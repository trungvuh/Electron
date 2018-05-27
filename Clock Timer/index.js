
var clockArray = new Array();
//initialy no clock is in running mode, currentRunningClock =-1
var currentRunningClock = -1;

function ClockObject(bigTime, mode, animation, color, id) {

    // Add object properties, i.e. bigTime=1499 means 25 minutes
    this.bigTime = bigTime;
    this.mode = mode;
    this.animation = animation;
    this.color = color;
    var percent;
    var mins;
    var secs;
    var countdownID;
    this.id = id;
    this.minutes = document.getElementById("minutes_" + id);
    this.seconds = document.getElementById("seconds_" + id);
    this.message = document.getElementById("message_" + id);
    this.start = false;
    this.longBreakVal = 600;
    this.shortBreakVal = 300;
    this.isStarted = false;
    this.messageId = "message_" + id;


}



var test = document.getElementById("test");
//initialization of a new object in array for the clock
function initElements(id) {
  // change from 1499 to desired seconds i.e. 60 for 1 minute
    clockArray[id] = new ClockObject(1499, "normal", "fadeToBlack", "0D5B85", id);

}


// counter function is going to be used for work purpose
function counter(clockId) {
// change the minutes and seconds in html
    clockArray[clockId].mins = Math.floor(clockArray[clockId].bigTime / 60);
    clockArray[clockId].secs = clockArray[clockId].bigTime - clockArray[clockId].mins * 60;

    // change the HTML to show new minutes and seconds
    clockArray[clockId].minutes.innerHTML = (clockArray[clockId].mins < 10 ? '0' : '') + clockArray[clockId].mins;
    clockArray[clockId].seconds.innerHTML = (clockArray[clockId].secs < 10 ? '0' : '') + clockArray[clockId].secs;


    // switch modes if timer ends
    if (clockArray[clockId].bigTime == 0) {
        returnVal = playSound();
        currentRunningClock = -1;
        clearInterval(clockArray[clockId].countdownID);

        if(returnVal == 1)
        {
            alert("Work has been finished for the running clock")
        }
        hideClock(clockId);
    } else {
        // decrement
        clockArray[clockId].bigTime = clockArray[clockId].bigTime - 1;
    }

}

//works for long break
function counterLongBreak(longClockId) {
    clockArray[longClockId].mins = Math.floor(clockArray[longClockId].longBreakVal / 60);
    clockArray[longClockId].secs = clockArray[longClockId].longBreakVal - clockArray[clockId].mins * 60;

    // change the HTML to show new minutes and seconds
    clockArray[longClockId].minutes.innerHTML = (clockArray[clockId].mins < 10 ? '0' : '') + clockArray[longClockId].mins;
    clockArray[longClockId].seconds.innerHTML = (clockArray[clockId].secs < 10 ? '0' : '') + clockArray[longClockId].secs;


    // switch modes if timer ends
    if (clockArray[longClockId].longBreakVal == 0) {

        clearInterval(clockArray[longClockId].countdownID);
        clockArray[currentRunningClock].countdownID = setInterval("counter(currentRunningClock)", 1000);

    } else {
        // decrement
        clockArray[longClockId].longBreakVal = clockArray[longClockId].longBreakVal - 1;
    }

}

function counterShortBreak(shortClockId) {
    clockArray[shortClockId].mins = Math.floor(clockArray[shortClockId].shortBreakVal / 60);
    clockArray[shortClockId].secs = clockArray[shortClockId].shortBreakVal - clockArray[clockId].mins * 60;

    // change the HTML to show new minutes and seconds
    clockArray[shortClockId].minutes.innerHTML = (clockArray[shortClockId].mins < 10 ? '0' : '') + clockArray[shortClockId].mins;
    clockArray[shortClockId].seconds.innerHTML = (clockArray[shortClockId].secs < 10 ? '0' : '') + clockArray[shortClockId].secs;


    // switch modes if timer ends
    if (clockArray[shortClockId].shortBreakVal == 0) {

        clearInterval(clockArray[shortClockId].countdownID);
        clockArray[currentRunningClock].countdownID = setInterval("counter(currentRunningClock)", 1000);
    } else {
        // decrement
        clockArray[shortClockId].shortBreakVal = clockArray[shortClockId].shortBreakVal - 1;
    }

}

// ACTIONS =======================================================

// start timer
function startTimer(idString) {

//extract the integer value from id of the clock div
    clockId = idString.replace(/^\D+/g, '');

// it means the clock is already in running state
    if (currentRunningClock == clockId) {
        alert("This clock is already running. Please click reset if you want to start again or click Restart if you want to Restart from previous counter");
    }
    if (currentRunningClock == -1) {

        clockArray[clockId].messageId.innerHTML = "Clock is running";
        clockArray[clockId].isStarted = true;
        currentRunningClock = clockId;

        clockArray[clockId].countdownID = setInterval("counter(clockId)", 1000);
        clockArray[id].message = "slow and steady wins something";
    }
    if (currentRunningClock != clockId && currentRunningClock != -1) {
        alert("please stop the already running clock to start this");
    }

}
// restart timer
function restartTimer(idString) {
  //extract the integer value from id of the clock div
    clockRestartId = idString.replace(/^\D+/g, '');
    //check if the current clock is runnung whose timer is going to be reset
    if (currentRunningClock == clockRestartId) {
        if (clockArray[clockRestartId].isStarted == false) {
            clockArray[clockRestartId].messageId.innerHTML = "Clock is running";
            clockArray[clockRestartId].isStarted = true;
            clearInterval(clockArray[currentRunningClock].countdownID);
            currentRunningClock = clockRestartId;
            clockArray[clockRestartId].countdownID = setInterval("counter(clockRestartId)", 1000);
        }
        else {
            alert("This clock is already running");
        }
    }
    else {
        alert("This clock is not running");
    }

}
function longBreak(idString) {
  //extract the integer value from id of the clock div
    clockLongBreakId = idString.replace(/^\D+/g, '');
    clockArray[clockLongBreakId].isStarted = false;
    if (clockLongBreakId == currentRunningClock) {
        clockArray[clockLongBreakId].messageId.innerHTML = "Long Break";
        clockArray[clockLongBreakId].longBreakVal = 600;
        clockArray[clockLongBreakId].shortBreakVal = 300;
        clearInterval(clockArray[currentRunningClock].countdownID);
        clockArray[clockLongBreakId].countdownID = setInterval("counterLongBreak(clockLongBreakId)", 1000);
    }
    else {
        alert("this clock is not running");
    }

}

function shortBreak(idString) {

//extract the integer value from id of the clock div
    clockShortBreakId = idString.replace(/^\D+/g, '');
    clockArray[clockShortBreakId].isStarted = false;

    if (clockShortBreakId == currentRunningClock) {
        clockArray[clockShortBreakId].messageId.innerHTML = "Short Break";
        clockArray[clockShortBreakId].shortBreakVal = 300;
        clockArray[clockShortBreakId].longBreakVal = 600;
        clearInterval(clockArray[currentRunningClock].countdownID);
        clockArray[clockShortBreakId].countdownID = setInterval("counterShortBreak(clockShortBreakId)", 1000);
    }
    else {
        alert("this clock is not running");
    }

}


// stop timer
function stopTimer(idString) {
  //extract the integer value from id of the clock div
    clockId = idString.replace(/^\D+/g, '');

    if (clockId == currentRunningClock) {
        // stop timer
        clockArray[clockId].minutes.innerHTML = "25";
        clockArray[clockId].seconds.innerHTML = "00";
        clearInterval(clockArray[clockId].countdownID);
        clockArray[clockId].bigTime = 1499;
        // -1 means no clock is running
        currentRunningClock = -1;
    }
    else {
        clockId = currentRunningClock;
        alert("this clock is not running");
    }


}

// reset timer
function resetTimer(idString) {
  //extract the integer value from id of the clock div
    clockResetId = idString.replace(/^\D+/g, '');

    clockArray[clockResetId].bigTime = 1499;
    clockArray[clockResetId].minutes.innerHTML = "25";
    clockArray[clockResetId].seconds.innerHTML = "00";
    if (currentRunningClock > 0) {
        clearInterval(clockArray[currentRunningClock].countdownID);
    }


    currentRunningClock = -1;


}

function hideClock(idString) {

    closeId = "clock_" + idString.replace(/^\D+/g, '');
    closeClockId = idString.replace(/^\D+/g, '');
    if (currentRunningClock == closeClockId) {
        currentRunningClock = -1;
    }
    document.getElementById(closeId).style.display = "none";
}


function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
    return 1;

}

