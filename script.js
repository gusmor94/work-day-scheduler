var tasks = JSON.parse(localStorage.getItem("tasks")) || {};

// display current day at top of calendar
var displayDate = function() {
    var currentDate = moment().format("dddd, LL");
    var setDate = $("#currentDay").text(currentDate);
    setDate.addClass("font-weight-bold");
}
displayDate();

// present time bocks with standard business hours

// save time blocks into localStorage
var loadTasks = function() {

    $(".text-input").each(function () {
        var time = $(this).attr("id");
        $(this).text(tasks[time] || '')
    })
}


var saveTasks = function() {
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// edit time blocks
$(".time-text").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("w-100").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
})

$(".time-text").on("blur", "textarea", function() {
    var time = $(".time-text").data("time");
    var text = $(this).val().trim();
    // recreate p element
    var timeText = $("<p>").addClass("h-50 text-input").attr("id", time).text(text);
    $(this).replaceWith(timeText);

    $("span").on("click", function() {
        var buttonTime = $(this).attr("id");
        text = text;
        tasks[buttonTime] = text;
        saveTasks();
    })
})

// color code time blocks for past, present, or future
var auditHour = function() {
    // find p element's ID
    var currentHour = moment().hour();
    $(".time-text").each(function() {
        var hour = $(this).data("time");
        if(hour < currentHour) {
            $(this).addClass("past");
        }
        else if(hour === currentHour) {
            $(this).addClass("present");
        }
        else if(hour > currentHour) {
            $(this).addClass("future");
        }
    })
}
auditHour();

// load saved time blocks
loadTasks();