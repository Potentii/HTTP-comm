const LAST_AUTH_STORAGE_KEY = "last-auth";
var currentUserId = null;

function getItem(key){
   return JSON.parse(localStorage.getItem(key));
}

function setItem(key, value){
   localStorage.setItem(key, JSON.stringify(value));
}

function updateAuthStatus(status){
   var auth = getItem(LAST_AUTH_STORAGE_KEY);
   auth.ok = status;
   setItem(LAST_AUTH_STORAGE_KEY, auth);
}




function getFormattedDateTime(dateToFormat){
   return getFormattedDate(dateToFormat) + ' - ' + getFormattedTime(dateToFormat);
}
function getFormattedDate(dateToFormat){
   var d = new Date(dateToFormat || Date.now()),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

   month = month.length<2 ? '0' + month:month;
   day = day.length<2 ? '0' + day:day;

   var date = [day, month, year].join('/');
   return date;
}

function getFormattedTime(dateToFormat){
   var d = new Date(dateToFormat || Date.now()),
      hours = '' + d.getHours(),
      minutes = '' + d.getMinutes(),
      seconds = '' + d.getSeconds();

   hours = hours.length<2 ? '0' + hours:hours;
   minutes = minutes.length<2 ? '0' + minutes:minutes;
   seconds = seconds.length<2 ? '0' + seconds:seconds;

   var time = [hours, minutes, seconds].join(':');
   return time;
}
