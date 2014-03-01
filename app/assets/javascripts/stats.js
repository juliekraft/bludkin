// THIS GIVES STATS PAGE
$(function(){
  console.log("Stats document onload function")
  $('#main-container').empty() //just for testing!
  $.getJSON("http://localhost:3000/cycles.json", function(data){
    console.log(data)
    data.forEach(function(cycle){ 
      var source = $('#stats-template').html();
      var template = Handlebars.compile(source);
      var $cycle = $(template(cycle))
      $('#main-container').append($cycle)
    })
  })
})