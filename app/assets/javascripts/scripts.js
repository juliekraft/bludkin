$(document).ready(function() {

  if (window.location.pathname === "/cycles" ||
      window.location.pathname === "/" ||
      window.location.hash === "#_=_")
  {
    window.app = new App();
    Backbone.history.start();
    console.log("document ready")
  }

});