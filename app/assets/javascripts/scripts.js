$(document).ready(function() {

  if (window.location.path === "/cycles" || window.location.path === "/"){

    window.app = new App();
  
    Backbone.history.start();

    console.log("document ready")

  }

 
});