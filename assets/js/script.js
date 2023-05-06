$(function () {

    $('#currentDay').text(dayjs().format('dddd, MMMM, D, YYYY, HH:mm:ss'))


    // TODO: Add a listener for click events on the save button. This code should
    $('.saveBtn').click(function (event) {
        let target = $(event.target)
        let storedContent = target.siblings('textarea').val()
        localStorage.setItem(target.parent().attr('id'), storedContent);
    });

    // TODO: Add code to apply the past, present, or future class to each time

    $('[id^="hour-"]').each(function(){
        let plannerTime = dayjs($(this).attr('id'), 'hour-HH').hour()
        let now = dayjs().hour()
        if (plannerTime < now){
            $(this).addClass('past').removeClass('future present')
            } else if (plannerTime === now) {
                $(this).addClass('present').removeClass('past future')
            } else {
                $(this).addClass('future').removeClass('past present')
            }
    })


    // TODO: Add code to get any user input that was saved in localStorage and set
    $('.time-block').each(function () {
        let storedContent = localStorage.getItem($(this).attr('id'))
        console.log(storedContent)

        if (storedContent) {
            $(this).find('textarea').val(storedContent)
        }
    })

    // TODO: Add code to display the current date in the header of the page.
    function displayDateTime() {
        $('#currentDay').text(dayjs().format('dddd, MMMM, D, YYYY, HH:mm:ss'))

    }

    setInterval(displayDateTime, 1000)

});



