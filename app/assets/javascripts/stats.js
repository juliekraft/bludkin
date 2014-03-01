UI.Stats = Backbone.View.extend({
  initialize: function(){

  },
  template: function(attributes){
    var source = $('#stats-template').html()
    var template = Handlebars.compile(source)

    return template(attributes)
  },
  render: function(){
    this.$el.html(this.template({ }))
    return this;
  }
})