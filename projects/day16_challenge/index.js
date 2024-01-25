function showClock() {
  let day = document.getElementById("day");
  let hour = document.getElementById("hour");
  let minute = document.getElementById("minute");
  let second = document.getElementById("second");
  let ampm = document.getElementById("ampm");

  let date = new Date();
  let dayName = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (hours >= 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  hour.innerHTML = hours;
  day.innerHTML = days[dayName];
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  setTimeout(showClock, 1000);
}

showClock();
