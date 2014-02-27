var calendar_options = {
  // put your options and callbacks here
  dayClick: function(date, allDay, jsEvent, view) {

  // Cycle.new({user_id: this.user.user_id, start_date: date});

  //UGLY, FIX THIS
  $(this).css('background-color', '#67090C');
  $(this).next().css('background-color', '#67090C');
  $(this).next().next().css('background-color', '#67090C');
  $(this).next().next().next().css('background-color', '#67090C');
  }
  // eventRender: function(event, element) {
  //     element.qtip({
  //         content: event.description
  //     })
  // }
}

$(document).ready(function() {

  window.app = new App();

  Backbone.history.start();

  // page is now ready, initialize the calendar...
  $('#calendar').fullCalendar(calendar_options)


});