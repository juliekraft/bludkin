var calendar_options = {
  dayClick: function(date, allDay, jsEvent, view) {
    // console.log('date', date)
    // console.log('allDay', allDay)
    // console.log('jsEvent', jsEvent)
    // console.log('view', view)

    $('#start-date-input').val(date)

    // changes background color of day on calendar
    $('#color').removeAttr('id')
    $(this).attr('id', 'color');

    //UGLY, FIX THIS
    // $(this).css('background-color', '#67090C');
    // $(this).next().css('background-color', '#67090C');
    // $(this).next().next().css('background-color', '#67090C');
    // $(this).next().next().next().css('background-color', '#67090C');
    // }
  }
}

var App = Backbone.Router.extend({
  routes: {
    "": "home", // friends network
    "calendar" : "calendar",
    "all" : "friends",
    "stats" : "stats"
  },

  home: function(){
    app.current_page = "home"
     if (ui) ui.remove()
    var ui = new UI()
    var home = new UI.Home()
    ui.$el.empty()
    ui.$el.append(home.render().$el)
    
  },

  calendar: function(){
    app.current_page = "calendar"
    if (ui) ui.remove()
    var ui = new UI()
    var cal = new UI.Cal()
    ui.$el.empty()
    ui.$el.append(cal.render().$el)
    $('#calendar').fullCalendar(calendar_options)

    // on click 'archive' callback, create instance of Cycle
    // using submitCallback is breaking everything
    // $('#archive').on('click', function(e){
    // // submitCallback: function(e){
    //   e.preventDefault()
    //   console.log("archive clicked")
    //   var cycle = new Cycle({'start_date': ('#start-date-input').val})
    // })
  },

   stats: function(){
    app.current_page = "stats"
     if (ui) ui.remove()
    var ui = new UI()
    var stats = new UI.Stats()
    ui.$el.empty()
    ui.$el.append(stats.render().$el)
    
  },

   friends: function(){
    app.current_page = "friends"
    if (ui) ui.remove()
    var ui = new UI()
    var friends = new UI.Friends()
    ui.$el.empty()
    ui.$el.append(friends.render().$el)
}
//   calendar: function(){
//     app.current_page = "calendar"
//     if (ui) ui.remove()
//     var ui = new UI()
//     $('#calendar').fullCalendar(calendar_options)
//   }
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

UI.Friends = Backbone.View.extend({
  initialize: function(){

  },
  template: function(attributes){
    var source = $('#friends-template').html()
    var template = Handlebars.compile(source)
    return template(attributes)
  },
  render: function(){

   



    this.$el.html(this.template({ }))
    return this;
  }

})

UI.Cal = Backbone.View.extend({
  initialize: function(){

  },
  template: function(attributes){
    var source = $('#calendar-template').html()
    var template = Handlebars.compile(source)
      return template(attributes)
  }, 
   render: function(){
    this.$el.html(this.template({ }))
    return this;
  },
  events: {
    'click #archive' : 'archiveCallback' // syntax?  or App.home.submitCallback?
  },

  // CALLBACKS
  // on click 'archive' create instance of Cycle
  archiveCallback: function(e){
    e.preventDefault()

    //make fullCalendar date follow Ruby conventions
    var months = {
      'Jan' : '01',
      'Feb' : '02',
      'Mar' : '03',
      'Apr' : '04',
      'May' : '05',
      'Jun' : '06',
      'Jul' : '07',
      'Aug' : '08',
      'Sep' : '09',
      'Oct' : '10',
      'Nov' : '11',
      'Dec' : '12'
    };

    var cdate = this.$('#start-date-input').val()
    var rdate = [];
    rdate.push(cdate.split(' ')[3]);
    rdate.push('-');
    rdate.push(months[cdate.split(' ')[1]]);
    rdate.push('-');
    rdate.push(cdate.split(' ')[2]);
    var date = rdate.join('');
    console.log("date", date);

    //instantiate new Cycle with start_date filled in
    console.log("archive clicked")
    var cycle = new Cycle({'start_date': date })
    cycle.save()
    console.log(cycle, 'cycle')

    //update calendar -- highlight four days w/ red color

  }

})










var Cycle = Backbone.Model.extend({
  url: function(){
    if(this.get("id")){
      return "/cycles/" + this.get("id")
    } else {
      return "/cycles"
    }
  }
})

var CycleView = Backbone.View.extend({
  initialize: function(){

  },
  template: function(){

  },
  render: function(){

  }
})

var CycleCollection = Backbone.Collection.extend({

})

var CycleCollectionView = Backbone.View.extend({

})


var FormView = Backbone.View.extend({
  // below copied to UI.Home
  // events: {
  //   'click #archive' : 'submitCallback' // syntax?  or App.home.submitCallback?
  // }
})









