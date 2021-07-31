const byteSize = require('byte-size')
const Utils = {}

Utils.time = function (s) {
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  var days = parseInt(Math.floor(hrs / 24));
  hrs = parseInt(hrs % 24);

  var semanas = parseInt(Math.floor(days / 7));
  days = parseInt(days % 7);

  var meses = parseInt(Math.floor(semanas / 7));
  semanas = parseInt(semanas % 7);

  return (
    (meses > 0 ? pad(meses) + 'm, ' : "") +
    (semanas > 0 ? pad(semanas) + 's, ' : '') +
    (days > 0 ? pad(days) + 'd, ' : "") +
    (hrs > 0 ? pad(hrs) + 'h, ' : "") +
    (mins > 0 ? pad(mins) + 'm e ' : "") +
    (pad(secs) + 's')
  )
}

Utils.time2 = function (s) {
  function pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  var days = parseInt(Math.floor(hrs / 24));
  hrs = parseInt(hrs % 24);

  var semanas = parseInt(Math.floor(days / 7));
  days = parseInt(days % 7);

  var meses = parseInt(Math.floor(semanas / 7));
  semanas = parseInt(semanas % 7);

  return (
    (meses > 0 ? pad(meses) + ':' : "") +
    (semanas > 0 ? pad(semanas) + ':' : "") +
    (days > 0 ? pad(days) + ':' : "") +
    (hrs > 0 ? pad(hrs) + ':' : "") +
    (mins > 0 ? pad(mins) + ':' : "") +
    (pad(secs))
  )
}

Utils.bytes = function (size) {
  return (byteSize(size))
}



module.exports = Utils