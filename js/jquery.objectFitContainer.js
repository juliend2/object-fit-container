(function ( $ ) {

  $.fn.objectFitContainer = function() {
    return this.each(function(i, element) {
      var naturalWidth = element.naturalWidth;
      var naturalHeight = element.naturalHeight;
      var elementHeight = $(element).height();
      var desiredElementWidth = (elementHeight * naturalWidth) / naturalHeight;
      // console.log('naturalWidth',
      //            naturalWidth,
      //            'naturalHeight',
      //            naturalHeight,
      //            'elementHeight',
      //            elementHeight);
      $(element).width(desiredElementWidth);
      return element;
    });
  };

}( jQuery ));
