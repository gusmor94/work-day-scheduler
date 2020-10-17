// display current day at top of calendar
var displayDate = function() {
    var currentDate = moment().format("dddd, LL");
    var setDate = $("#currentDay").text(currentDate);
    setDate.addClass("font-weight-bold");
}
displayDate();

// present time bocks with standard business hours

// color code time blocks for past, present, or future

// edit time blocks

// save time blocks into localStorage

// load saved time blocks 