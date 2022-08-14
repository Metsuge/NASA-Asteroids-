export const getFormattedDate = function (epoch_date) {
  let d = epoch_date;

  d =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2) +
    " " +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2);
  // ":" +
  // ("0" + d.getSeconds()).slice(-2);
  return d;
};

export const getYear = function (epoch_date) {
  let d = epoch_date;

  d =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2);
  return d;
};

export const addDays = function (epochTime, nrDaysToAdd) {
  let date = epochTime;
  date.setDate(date.getDate() + nrDaysToAdd);
  let returned =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);
  return returned;
};

export const subtractDays = function (epochTime, nrDaysToSubtract) {
  let date = epochTime;
  date.setDate(date.getDate() - nrDaysToSubtract);
  let returned =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);
  return returned;
};

export const liveClock = function (element) {
  var d = new Date();
  let y = d.getFullYear() + "-";
  let month = ("0" + (d.getMonth() + 1)).slice(-2) + "-";
  let day = ("0" + d.getDate()).slice(-2);
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  if (document.getElementById(element)) {
    return (document.getElementById(element).textContent =
      y +
      month +
      day +
      " " +
      ("0" + h).substr(-2) +
      ":" +
      ("0" + m).substr(-2) +
      ":" +
      ("0" + s).substr(-2));
  }
};
