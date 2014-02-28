var calendar_options = {
  dayClick: function(date, allDay, jsEvent, view) {
    // console.log('date', date)
    // console.log('allDay', allDay)
    // console.log('jsEvent', jsEvent)
    // console.log('view', view)

    $('#start-date-input').val(date)

    // changes background color of day on calendar
    $('#color').removeAttr('id')
    _.each($(this).attr('id', 'color'));

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

    // on click 'archive' callback, create instance of Cycle
    // using submitCallback is breaking everything
    // $('#archive').on('click', function(e){
    // // submitCallback: function(e){
    //   e.preventDefault()
    //   console.log("archive clicked")
    //   var cycle = new Cycle({'start_date': ('#start-date-input').val})
    // })
 

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
  },
  events: {
    'click #archive' : 'submitCallback' // syntax?  or App.home.submitCallback?
  },

  // CALLBACKS
      // on click 'archive' callback, create instance of Cycle
    // using submitCallback is breaking everything
    // $('#archive').on('click', function(e){
    submitCallback: function(e){
      e.preventDefault()
      console.log("archive clicked")
      var cycle = new Cycle({'start_date': this.$('#start-date-input').val()})
      console.log(cycle, "model!")
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








// DINOSAUR WEEKEND FORM VIEW FOR REFERENCE
// var FormView = Backbone.View.extend ({
//   initialize: function(){
//     console.log("FormView initialized!")
//     this.$('#dinosaur_update_button').hide();
//   },
//   el: function(){
//     return $('#dinosaur_form');
//   },
//   submitCallback: function(e){
//     e.preventDefault();

//     var array_of_dinosaur_data = this.$el.serializeArray();

//     // creating an instance of dinosaur and placing it in the collection
//     list_view.collection.create({
//       name: array_of_dinosaur_data[0].value,
//       species: array_of_dinosaur_data[1].value,
//       gender: array_of_dinosaur_data[2].value
//     });

//     this.resetValues();
//   },
//   resetValues: function(){
//     _.each(this.$('input'), function(input){
//       $(input).val('');
//     })
//   },
//   edit: function(model){
//     this.$('#dinosaur_create_button').hide();
//     this.$('#dinosaur_update_button').show();

//     this.$('#dinosaur_name').val(model.get('name'));
//     this.$('#dinosaur_species').val(model.get('species'));
//     this.$('#dinosaur_gender').val(model.get('gender'));

//     this.$('#dinosaur_update_button').on('click', function(e){
//       e.preventDefault();

//       model.set({
//         'name': form_view.$('#dinosaur_name').val(),
//         'species': form_view.$('#dinosaur_species').val(),
//         'gender': form_view.$('#dinosaur_gender').val()
//       })

//       model.save({}, {
//         url: "/dinosaurs/"+model.id
//       })

//       form_view.$('#dinosaur_create_button').show();
//       form_view.$('#dinosaur_update_button').hide();

//       $(this).off('click');
//     })

//   },
//   events: {
//     "click #dinosaur_create_button" : "submitCallback",
//     "click #dinosaur_update_button" : "updateCallback"
//   }
// })