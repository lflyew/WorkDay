//function to grab current date and time using moment.js

var day = moment().format ("MMMM Do YYYY, h:mm a");
$("#currentDay").text(day);

