setInterval(function () {
  let seattleElement = document.querySelector("#seattle");
  let seattleDateElement = seattleElement.querySelector(".date");
  let seattleTimeElement = seattleElement.querySelector(".time");

  seattleDateElement.innerHTML = moment()
    .tz("America/Seattle")
    .format("MMMM Do, YYYY");
  seattleTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do, YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>]A[</small>]");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  tokyoDateElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("h:mm:ss [<small>]A[</small>]");
}, 1000);
