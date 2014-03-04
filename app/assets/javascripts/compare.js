$.ajax({
  type: "GET",
  url: "/cycles/months",
  dataType: "json",
  success: function(data){

    console.log(data)

new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'compareChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: data.me,
    // The name of the data record attribute that contains x-values.
    xkey: 'start_date',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['stop_date'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Compare Your Kin']
    });
  }
})


