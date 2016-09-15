
var background = function() {
  var today = new Date();
  var time = today.getHours();

  if (time < 12) {
    document.getElementById("h1").innerText = "Good Morining Sunshine!";
  };

  if (time == 12) {
    document.getElementById("h1").innerText = "Lunch Time!";
  };

  if (time > 12) {
    document.getElementById("h1").innerText = "Good Afternoon!";
  };

  if (time >= 16) {
    document.getElementById("h1").innerText = "Good Evening!";
  };
};

background();

var startclock = function() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  min = checkTime(m);
  sec = checkTime(s);
  var time = setTimeout(startclock, 1000);

  document.getElementById("txt").innerText = h + ":" + min + ":" + sec;
};

startclock();


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
    return i;
  } else {
    return i;
  }
};

checkTime(min);
checkTime(sec);