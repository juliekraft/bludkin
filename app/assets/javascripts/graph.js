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

    var myData = sinAndCos();


}



$.getJSON("/cycles.json", function(data){

nv.addGraph(function(){
  generateChart();
})


})


