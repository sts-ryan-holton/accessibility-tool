(function($) {
  $.fn.accessibilityTool = function( options ) {
    const settings = $.extend({
      toggler:                       '.btn-toggler',
      transitions:                   true,
      transitionSpeed:               500,
      dataFontIncrease:              'increase',
      dataFontDecrease:              'decrease',
      dataGrayscale:                 'toggle',
      dataInverse:                   'toggle',
      dataHighlightLinks:            'toggle',
      dataReset:                     'reset'
    }, options);
    const accessibilityTool          =  this
    let accessibilityFontSize        =  localStorage.getItem("accessibility-font-size")
    let accessibilityHighlightLinks  =  localStorage.getItem("accessibility-highlight-links")
    let accessibilityInverseColours  =  localStorage.getItem("accessibility-inverse-colours")
    let accessibilitygrayscale       =  localStorage.getItem("accessibility-grayscale")
    let accessibilityControls        =  [
                                          "accessibility-font-size",
                                          "accessibility-highlight-links",
                                          "accessibility-inverse-colours",
                                          "accessibility-grayscale"
                                        ]
    let fontsize
    if (accessibilityFontSize) {
      fontsize = parseInt(accessibilityFontSize)
    } else {
      fontsize = parseInt($('html').css('font-size'))
    }
    return this.each(function(t) {
      if (settings.transitions) {
        $(this).css('transition-duration', settings.transitionSpeed + 'ms')
      }
      $(settings.toggler).click(function(){
        $(this).parent().toggleClass('tool-open')
      })
      $('html').css('font-size', fontsize)
      $('[data-font-size="' + settings.dataFontIncrease + '"]').click(function(){
        fontsize++
        localStorage.setItem('accessibility-font-size', fontsize + 'px')
        accessibilityFontSize = localStorage.getItem("accessibility-font-size")
        $('html').css('font-size', fontsize)
      })
      $('[data-font-size="' + settings.dataFontDecrease + '"]').click(function(){
        fontsize--
        localStorage.setItem('accessibility-font-size', fontsize + 'px')
        accessibilityFontSize = localStorage.getItem("accessibility-font-size")
        $('html').css('font-size', fontsize)
      })
      $('[data-grayscale-toggler="' + settings.dataGrayscale + '"]').click(function(){
        $('body').addClass('accessibility-grayscale')
        localStorage.setItem('accessibility-grayscale', 'yes')
        $(this).attr('disabled', true)
      })
      if (accessibilitygrayscale === 'yes') {
        $('body').addClass('accessibility-grayscale')
      }
      $('[data-inverse-toggler="' + settings.dataInverse + '"]').click(function(){
        $('body').addClass('accessibility-inverse-colours')
        localStorage.setItem('accessibility-inverse-colours', 'yes')
        $(this).attr('disabled', true)
      })
      if (accessibilityInverseColours === 'yes') {
        $('body').addClass('accessibility-inverse-colours')
      }
      $('[data-links-toggler="' + settings.dataHighlightLinks + '"]').click(function(){
        $('a').addClass('accessibility-highlight-links')
        localStorage.setItem('accessibility-highlight-links', 'underline')
        $(this).attr('disabled', true)
      })
      if (accessibilityHighlightLinks === 'underline') {
        $('a').addClass('accessibility-highlight-links')
      }
      $('[data-reset-toggler="' + settings.dataReset + '"]').click(function(){
        for (key of accessibilityControls) {
          localStorage.removeItem(key)
          location.reload()
        }
      })
    })
  }
}(jQuery))
