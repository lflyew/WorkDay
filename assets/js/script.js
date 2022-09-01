//function to grab current date and time using moment.js
$(document).ready(function() {
var day = moment().format ("dddd, MMMM Do YYYY, h:mm A");
$("#currentDay").text(day);
var currenthr = moment().hour();
// console.log("currenthr", currenthr);
hrcolorchange(currenthr);
});

function hrcolorchange(currenthr) {

    $(".time-block").each(function () {
        var hourS = parseInt($(this).attr("id"));
        if (hourS > currenthr){
            $(this).addClass("future");
        } else if (hourS == currenthr) {
            $(this).addClass("present");

        }else {
            $(this).addClass("past");
        }
        });
    }
    //     // console.log(hourS);
 
   hrcolorchange();

//Save input in calendar
$(".saveBtn").on("click", function(){
    var time = $(this).siblings(".hour").text();
    var desc = $(this).siblings(".description").val();
    localStorage.setItem(time, desc);
});

    function saveData() {
        $(".hour").each(function () {
          var hour = $(this).text();
          var desc = localStorage.getItem(hour);
      
          if (desc !== null) {
            $(this).siblings(".description").val(desc);
          }
        });
      }
      
      saveData();