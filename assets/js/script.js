//function to grab current date and time using moment.js
$(document).ready(function() {
var day = moment().format ("MMMM Do YYYY");
$("#currentDay").text(day);
var currenthr = moment().format("HH");
console.log("currenthr", currenthr);
hrcolorchange(currenthr);
});

function hrcolorchange(currenthr) {

    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id"));
        if (hour > currenthr){
            $(this).addClass("future");
        } else if (hour == currenthr) {
            $(this).addClass("present");

        }else {
            $(this).addClass("past");
        }
        });
    }
    //     // console.log(hour);
 
    //     if (hour < currenthr) {
    //         $(this).removeClass("future, present");
    //         $(this).addClass("past");
    //     } else if (hour === currenthr){
    //         $(this).removeClass("future, past");
    //         $(this).addClass("present");
    //     } else {
    // //         $(this).removeClass("present, past");
    // //         $(this).addClass("future");
    // //     }

    // //     }
    // // )
    // // }

    // hrcolor();

    // $(document).ready(function(){
    //     $(".saveBtn").click(function() {
    //         var tsk = $(this).parent().children("textarea").val();
    //         console.log (tsk);
    //         var time = $(this).parent().attr("id");
    //         console.log(time);
    //         localStorage.setItem(time, tsk);
    //     })
    // });

    // var hour7 = localStorage.getItem("7AM")
    // $("#7AM").children("textarea").val(hour7);

    // var hour8 = localStorage.getItem("8AM")
    // $("#8AM").children("textarea").val(hour8);

    // var hour9 = localStorage.getItem("9AM")
    // $("#9AM").children("textarea").val(hour9);

    // var hour10 = localStorage.getItem("10AM")
    // $("#10AM").children("textarea").val(hour10);
    
    // var hour11 = localStorage.getItem("11AM")
    // $("#11AM").children("textarea").val(hour11);

    // var hour12 = localStorage.getItem("12PM")
    // $("#12PM").children("textarea").val(hour12);


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