// User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color - coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
    $('#currentDay').text(dayjs().format('dddd, MMMM, D, YYYY, HH:mm:ss'))
    

    // TODO: Add a listener for click events on the save button. This code should
    $('.saveBtn').click(function (event) {
        let target = $(event.target)
        let storedContent = target.siblings('textarea').val()
        localStorage.setItem(target.parent().attr('id'), storedContent);
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    let now = dayjs()
    if (now == div){
        $(this).addClass('.present').removeClass('.future')
    } else if (now > div) {
        $(this).addClass('.past').removeClass('.present')
    }
    

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    let storedContent = localStorage.getItem(target.parent().attr('id'))
    target.parent().attr('id').text(storedContent)

    // TODO: Add code to display the current date in the header of the page.
    function displayDateTime() {
        $('#currentDay').text(dayjs().format('dddd, MMMM, D, YYYY, HH:mm:ss'))

    }

    setInterval(displayDateTime, 1000)

});



