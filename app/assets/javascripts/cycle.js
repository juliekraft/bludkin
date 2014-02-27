var App = Backbone.Router.extend({
  routes: {
    "": "home", // friends network
    "calendar" : "calendar"
    // "search" : "search",
    // "stats" : "stats"
  },

  home: function(){
    app.current_page = "home"
    if (ui) ui.remove()
    var ui = new UI()
  },

  calendar: function(){
    app.current_page = "calendar"
    if (ui) ui.remove()
    var ui = new UI()
  }
})

var UI = Backbone.View.extend({
  initialize: function(){

  },

  el: function(){
    return $('#calendar-view')
  }
})


// var Cycle = Backbone.Model.extend({
//   url: function(){
//     if(this.get("id")){
//       return "/cycles/" + this.get("id")
//     } else {
//       return "/cycles"
//     }
//   }
// })

// var CycleView = Backbone.View.extend({
//   initialize: function(){

//   },
//   template: function(){

//   },
//   render: function(){

//   }
// })

// var CycleCollection = Backbone.Collection.extend({

// })

// var CycleCollectionView = Backbone.View.extend({

// })

// var FormView = Backbone.View.extend({

// })