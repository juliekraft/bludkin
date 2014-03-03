var generateChart = function() {
  var chart = nv.models.lineChart()
      .margin({left: 100})
      .userInteractiveGuideline(true)
      .transitionDuration(350)
      .showLegend(true)
      .showYAxis(true)
      .showXAxis(true)
      ;

  chart.XAxis
    .axisLabel('Period Date (y-m-d)')
    .tickFormat(d3.format(',r'));

  chart.YAxis
    .axisLabel('Cycle Length')
    .tickFormat(d3.format('.02f'));

    var myData = info();

    d3.select('#chart svg')
      .datum(info)
      .call(chart);

 nv.utils.windowResize(function() { chart.update() });
  return chart;
  });

function info(){
  ////AJAX CALL HERE?
}


}



$.getJSON("/cycles.json", function(data){

nv.addGraph(function(){
  generateChart();
})


})


