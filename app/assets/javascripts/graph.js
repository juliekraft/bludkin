
// buildData = function(data){
//   var periodData = [{ values: []}]
//   x = 0
//   d3.select(data).each(function(cycle){
//     periodData.values.push({x: days, y: cycle.days });
//     x += cycle.days
//   })
//   return periodData;
// } 


var getInfo = function(){
   $.getJSON("/cycles.json", function(data) {
      // data = buildData(data)
      // myData = data 
     var periodData = [{ values: []}]
     _.each(data, function(cycle, index){

      periodData[0].values.push({
        y: cycle.days,
        x: index,
        color: '#ff7f0e',
        key: "Meghann"
      });

     })
      console.log(data)

      generateChart(periodData)
   })
}





// var data =[{ values: [
//   {x: 0, y: 10},
//   {x: 10, y: 15},
//   {x: 20, y: 30},
//   {x: 30, y: 20},
//   {x: 40, y: 50},
//   {x: 50, y: 90},
//   {x: 60, y: 70},
//   {x: 70, y: 90},
//   {x: 80, y: 10}
// ]
// }];

var generateChart = function(myData) {

  nv.addGraph(function() {
    chart = nv.models.lineChart()


            .margin({left: 100})
           .transitionDuration(350)
            .useInteractiveGuideline(true)
            .showLegend(true)
            .showYAxis(true)
            .showXAxis(true)
      ;

    chart.xAxis
      .axisLabel('Cycle')
      .rotateLabels(-45)
      .tickFormat(d3.format(',r'));

    chart.yAxis
      .axisLabel('Cycle Length')
      .tickFormat(d3.format('d'));

      d3.select('svg')
        .datum(myData)
        .call(chart)
    


    // chart.YAxis
    //   .axisLabel('Cycle Length')
    //   .tickFormat(d3.format('.02f'));

    // var myData = info();

    //   d3.select('#chart svg')
    //     .datum(info)
    //     .call(chart);
   nv.utils.windowResize(function() { chart.update() });
     return chart;
  });
};





