//function to grab current date and time using moment.js

var day = moment().format ("MMMM Do YYYY, h:mm a");
$("#currentDay").text(day);

function hrcolor() {
    var currenthr = moment().hour();
    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id").split("hour")[1]);
        // console.log(hour);
 
        if (hour < currenthr) {
            $(this).removeClass("future present");
            $(this).addClass("past");
        } else if (hour === currenthr){
            $(this).removeClass("future past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present past");
            $(this).addClass("future");
        }

        }
    )
    }

    hrcolor();