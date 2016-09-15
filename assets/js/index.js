
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
