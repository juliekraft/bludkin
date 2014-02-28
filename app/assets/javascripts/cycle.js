var calendar_options = {
  // put your options and callbacks here
  dayClick: function(date, allDay, jsEvent, view) {
    // console.log('date', date)
    $('#start-date-input').val(date)

    // changes background color of day on calendar
    $('#color').removeAttr('id')
    _.each($(this).attr('id', 'color'));

    // testing to find all days on calendar with style tag
    // _.findWhere(
    //   // console.log($('td'))
    //   ($('td')), ($("td").inlineStyle("background-color"))
    // )
    

  // Cycle.new({user_id: this.user.user_id, start_date: date});

  //UGLY, FIX THIS
  // $(this).css('background-color', '#67090C');
  // $(this).next().css('background-color', '#67090C');
  // $(this).next().next().css('background-color', '#67090C');
  // $(this).next().next().next().css('background-color', '#67090C');
  // }
  },
  eventRender: function(event, element) {

  }
}

  // $('td').on('click', function(data){
  //   console.log("TD day clicked")
  //   console.log("data", data)
  // })


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
    var home = new UI.Home()
    ui.$el.append(home.render().$el)
    $('#calendar').fullCalendar(calendar_options)


  },

  calendar: function(){
    app.current_page = "calendar"
    if (ui) ui.remove()
    var ui = new UI()
    $('#calendar').fullCalendar(calendar_options)
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

UI.Home = Backbone.View.extend({
  initialize: function(){

  },
  template: function(attributes){
    var source = $('#home-template').html()
      var template = Handlebars.compile(source)
      return template(attributes)
  }, 
   render: function(){
    this.$el.html(this.template({ }))
    return this;
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