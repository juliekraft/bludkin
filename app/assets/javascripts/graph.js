// buildData = function(data){
//   var periodData = []
//   x = 0
//   d3.select(data).each(function(cycle){
//     periodData.push({x: x, y: cycle.days });
//     x += cycle.days
//   })
//   return periodData;
// } 


// getInfo = function(){
//    $.getJSON("/cycles.json", function() {
//    })
//    .success(function(data) {
//       buildData(data)
//    })
// }




var data =[{ values: [
  {x: 0, y: 10},
  {x: 10, y: 15},
  {x: 20, y: 30},
  {x: 30, y: 20},
  {x: 40, y: 50},
  {x: 50, y: 90},
  {x: 60, y: 70},
  {x: 70, y: 90},
  {x: 80, y: 10}
]
}];

var generateChart = function() {

  nv.addGraph(function() {
    chart = nv.models.lineChart()


    //        .margin({left: 100})
    // //     .transitionDuration(350)
    //        .showLegend(true)
    //        .showYAxis(true)
    //        .showXAxis(true)
    //    ;

    chart.xAxis
      .axisLabel('date')
      .rotateLabels(-45)
      .tickFormat(function(d) { return d3.time.format('%b %d')(new Date(d)); })

    chart.yAxis
      .axisLabel('Period Date (y-m-d)')
      .tickFormat(d3.format('d'));

      d3.select('svg')
        .datum(data)
        .call(chart)
    


    // chart.YAxis
    //   .axisLabel('Cycle Length')
    //   .tickFormat(d3.format('.02f'));

    // var myData = info();

    //   d3.select('#chart svg')
    //     .datum(info)
    //     .call(chart);
  
     return chart;
  });
};





