





// THIS GIVES FRIEND PAGE
$(function(){
   //$('#main-container').empty() //just for testing!
  $.getJSON("http://localhost:3000/home/friend.json", function(data){
    console.log(data)
    data.forEach(function(user){ 
      var source = $('#friends-template').html();
      var template = Handlebars.compile(source);
      var $user = $(template(user))
      $('#main-container').append($user)
    })
    
  
  })


})