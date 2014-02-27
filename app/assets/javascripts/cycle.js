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
    return $('#main-container')
  },

  render: function(sub_views){
    var self = this;
    this.$el.empty()

    _.each(this.sub_views, function(view){
      view.remove()
    })

    this.sub_views = sub_views

    _.each(this.sub_views, function(view){
      var view_el = view.render().$el
      self.$el.append(view_el)
    })
    return this;
  }

})

UI.NavBar = Backbone.View.extend({

  initialize: function(){

  },
  render: function(){
    this.$el.html(this.template({
      page_name: app.current_page
    }))
    return this;
  },
  template: function(attributes){
    var source = $('#nav-bar-template').html()
      var template = Handlebars.compile(source)
      return template(attributes)
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