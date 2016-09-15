
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
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  m = checkTime(minutes);
  s = checkTime(seconds);
  var time = setTimeout(startclock, 1000);

  document.getElementById("txt").innerText = hours + ":" + minutes + ":" + seconds;
};

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
    return i;
  };
};

startclock();

checkTime(m);
checkTime(s);