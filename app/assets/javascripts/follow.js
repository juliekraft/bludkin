// $(function(){

//   var users = {
//     name: "name",
//     image: "image"
//   };

//   var source = $('#friend-template').html();

//   var template = Handlebars.compile(source);

//   var templateData = template(users);

//   $('friend-template').append(templateData);

//   $.ajax({
//     url:"http://localhost:3000/home/friend.json",
//     method: 'GET',
//     dataType: 'json',
//     success: function(data) {
//       var source = $('#friend-template').html(),
//         template = Handlebars.compile(source),
//         templateData = template(data);

//         $('#friend-template').append(templateData);}
// })



// $('body').html( templateData )  //the calendar rendered




// $('body').html( templateData )  //the friend rendered


$(function(){
  // $('#main-container').empty() //just for testing!
  $.getJSON("http://localhost:3000/home/friend.json", function(data){
    console.log(data)
    data.forEach(function(user){ 
      var source = $('#friend-template').html();
      var template = Handlebars.compile(source);
      var $user = $(template(user))
      $('#main-container').append($user)
    })
    
  
  })


})