(function($) {
  $.fn.accessibilityTool = function( options ) {
    const settings = $.extend({
      toggler: '[data-customerID="toggle"]'
    }, options);
    let accessibilityTool = this
    return this.each(function(t) {
      $(this).click(function () {
        alert('working')
      })
      console.log(this.toggler)
    })
  }
}(jQuery))
