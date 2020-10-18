tasks = {};

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
    tasks = JSON.parse(localStorage.getItem("tasks"));
}


var saveTasks = function() {
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// edit time blocks
$(".time-text").on("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("form-control form-control-sm").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
})

$(".time-text").on("blur", "textarea", function() {
    var time = $(".time-text").data("time");
    var text = $(this).val().trim();
    // recreate p element
    var timeText = $("<p>").addClass("h-100 w-100").attr("id", time).text(text);
    $(this).replaceWith(timeText);

    $(".btn").on("click", function() {
        var buttonTime = $(this).attr("id");
        text = text;
        tasks[buttonTime] = text;
        saveTasks();
    })
})

// color code time blocks for past, present, or future


// load saved time blocks
loadTasks();