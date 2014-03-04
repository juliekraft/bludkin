$.ajax({
  type: "GET",
  url: "/cycles/months",
  dataType: "json",
  success: function(data){

new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'compareChart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: data,
  // The name of the data record attribute that contains x-values.
  xkey: 'days',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['users'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Compare Your Kin']
});
  }
})


